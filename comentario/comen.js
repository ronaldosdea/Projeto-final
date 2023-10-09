function addComment(commentText) {
    const commentsList = document.getElementById('comments');
    const commentElement = document.createElement('div');
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    commentElement.classList.add('comment');
    commentElement.innerHTML = `
        <p>${commentText}</p>
        <p class="comment-date">${formattedDate}</p>
        <button class="delete-button">Excluir</button>
    `;

    commentsList.appendChild(commentElement);
    saveComment(commentText, formattedDate);
    logComment(commentText, formattedDate);


    const deleteButton = commentElement.querySelector('.delete-button');
    deleteButton.addEventListener('click', function () {
        deleteComment(commentText);
        commentsList.removeChild(commentElement);
    });
}

function saveComment(commentText, date) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ text: commentText, date });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function logComment(commentText, date) {
    console.log(`Novo comentário: "${commentText}" em ${date}`);
}


function deleteComment(commentText) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(commentObj => commentObj.text !== commentText);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function clearComments() {
    const commentsList = document.getElementById('comments');
    commentsList.innerHTML = ''; 
    localStorage.removeItem('comments'); 
}


function loadComments() {
    const commentsList = document.getElementById('comments');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(commentObj => {
        addComment(commentObj.text);
    });
}

loadComments();


document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        addComment(commentText);
        commentInput.value = '';
    }
});


document.getElementById('clear-button').addEventListener('click', function () {
    clearComments();
});
