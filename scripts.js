

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const items = Array.from(carousel.getElementsByTagName("li"));
    let currentIndex = 0;
  
    function nextItem() {
      items[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].style.display = "block";
    }
  
    // Oculta todos os itens, exceto o primeiro
    for (let i = 1; i < items.length; i++) {
      items[i].style.display = "none";
    }
  
    // Alterna automaticamente os aniversariantes a cada 3 segundos (3000 milissegundos)
    setInterval(nextItem, 3000);
  });