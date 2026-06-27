document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     MENU MOBILE (HAMBURGER)
  ========================== */

  const menuToggle = document.getElementById("menuToggle");
  const menuNav    = document.getElementById("menuNav");
  const menuIcon   = menuToggle.querySelector("i"); // o ícone <i> dentro do botão

  // Abre/fecha ao clicar no botão hamburguer
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // impede que o clique "vaze" para o document

    const estaAberto = menuNav.classList.toggle("active");

    // Troca o ícone: ☰ barras → ✕ fechar
    if (estaAberto) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Fecha o menu ao clicar em qualquer link da lista
  menuNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuNav.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    });
  });

  // Fecha o menu ao clicar FORA dele
  document.addEventListener("click", (e) => {
    const clicouForaDoMenu = !e.target.closest(".menu");

    if (clicouForaDoMenu) {
      menuNav.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  /* ==========================
     SLIDER AUTOMÁTICO
  ========================== */

  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval(() => {
    nextImage();
  }, 5000);

  function nextImage() {
    count++;
    if (count > 4) count = 1;
    document.getElementById("radio" + count).checked = true;
  }

}); // fim do DOMContentLoaded
