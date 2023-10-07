document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");
    const submitButton = document.getElementById("submit-comment");

    // Carregar comentários do localStorage ao iniciar a página
    loadComments();

    // Adicionar um novo comentário
    submitButton.addEventListener("click", function() {
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            addComment(commentText);
            commentInput.value = "";
        }
    });

    // Excluir um comentário
    commentList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-comment")) {
            const commentItem = event.target.parentElement;
            const commentText = commentItem.querySelector(".comment-text").textContent;
            deleteComment(commentText);
        }
    });

    function addComment(text) {
        const commentItem = document.createElement("li");
        commentItem.className = "comment";
        commentItem.innerHTML = `
            <span class="comment-text">${text}</span>
            <span class="delete-comment">Excluir</span>
        `;
        commentList.appendChild(commentItem);

        // Armazenar o novo comentário no localStorage
        saveComment(text);
    }

    function deleteComment(text) {
        const commentItems = commentList.querySelectorAll(".comment");
        commentItems.forEach(function(commentItem) {
            const commentText = commentItem.querySelector(".comment-text").textContent;
            if (commentText === text) {
                commentList.removeChild(commentItem);
                // Remover o comentário do localStorage
                removeComment(text);
            }
        });
    }

    function loadComments() {
        const comments = getCommentsFromStorage();
        comments.forEach(function(comment) {
            addComment(comment);
        });
    }

    function saveComment(text) {
        const comments = getCommentsFromStorage();
        comments.push(text);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function removeComment(text) {
        const comments = getCommentsFromStorage();
        const index = comments.indexOf(text);
        if (index !== -1) {
            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments));
        }
    }

    function getCommentsFromStorage() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        return comments;
    }
});
