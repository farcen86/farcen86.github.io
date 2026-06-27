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

  // Só executa o slider se os elementos existirem na página
const radio1 = document.getElementById("radio1");
if (radio1) {
  radio1.checked = true;
}

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

      // ============================================
      // 1. MENU MOBILE
      // ============================================
      document.addEventListener("DOMContentLoaded", () => {

        const menuToggle = document.getElementById("menuToggle");
        const menuNav    = document.getElementById("menuNav");

        menuToggle.addEventListener("click", () => {
          menuNav.classList.toggle("active");
        });

        // Fecha o menu ao clicar num link (mobile)
        menuNav.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
            menuNav.classList.remove("active");
          });
        });

        // ============================================
        // 3. CONTADOR DE CARACTERES DA MENSAGEM
        // ============================================
        const mensagemInput  = document.getElementById("mensagem");
        const contadorChars  = document.getElementById("contador-chars");

        mensagemInput.addEventListener("input", () => {
          const total = mensagemInput.value.length;
          contadorChars.textContent = `${total} / 500 caracteres`;

          // Muda cor quando está perto do limite
          contadorChars.style.color = total >= 450 ? "#e53e3e" : "#999";
        });

        // ============================================
        // 4. MÁSCARA DE TELEFONE
        // ============================================
        const telefoneInput = document.getElementById("telefone");

        telefoneInput.addEventListener("input", () => {
          // Remove tudo que não for número
          let val = telefoneInput.value.replace(/\D/g, "");

          // Aplica a máscara: (65) 9 9999-9999
          if (val.length <= 2) {
            val = val.replace(/(\d{0,2})/, "($1");
          } else if (val.length <= 3) {
            val = val.replace(/(\d{2})(\d{0,1})/, "($1) $2");
          } else if (val.length <= 7) {
            val = val.replace(/(\d{2})(\d{1})(\d{0,4})/, "($1) $2 $3");
          } else {
            val = val.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/, "($1) $2 $3-$4");
          }

          telefoneInput.value = val;
        });

        // ============================================
        // 5. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
        // ============================================

        // Funções auxiliares de validação
        function mostrarErro(campoId, erroId) {
          const campo = document.getElementById(campoId);
          const erro  = document.getElementById(erroId);

          campo.classList.add("erro");
          campo.classList.remove("sucesso");
          erro.classList.add("visivel");
        }

        function mostrarSucesso(campoId, erroId) {
          const campo = document.getElementById(campoId);
          const erro  = document.getElementById(erroId);

          campo.classList.remove("erro");
          campo.classList.add("sucesso");
          erro.classList.remove("visivel");
        }

        function limparStatus(campoId, erroId) {
          const campo = document.getElementById(campoId);
          const erro  = document.getElementById(erroId);

          campo.classList.remove("erro", "sucesso");
          erro.classList.remove("visivel");
        }

        // Validação em tempo real enquanto o usuário digita
        document.getElementById("nome").addEventListener("blur", () => {
          const val = document.getElementById("nome").value.trim();
          val.length >= 3
            ? mostrarSucesso("nome", "erro-nome")
            : mostrarErro("nome", "erro-nome");
        });

        document.getElementById("email").addEventListener("blur", () => {
          const val   = document.getElementById("email").value.trim();
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          regex.test(val)
            ? mostrarSucesso("email", "erro-email")
            : mostrarErro("email", "erro-email");
        });

        document.getElementById("telefone").addEventListener("blur", () => {
          const val = document.getElementById("telefone").value.replace(/\D/g, "");
          val.length >= 10
            ? mostrarSucesso("telefone", "erro-telefone")
            : mostrarErro("telefone", "erro-telefone");
        });

        document.getElementById("assunto").addEventListener("change", () => {
          const val = document.getElementById("assunto").value;
          val !== ""
            ? mostrarSucesso("assunto", "erro-assunto")
            : mostrarErro("assunto", "erro-assunto");
        });

        document.getElementById("mensagem").addEventListener("blur", () => {
          const val = document.getElementById("mensagem").value.trim();
          val.length >= 20
            ? mostrarSucesso("mensagem", "erro-mensagem")
            : mostrarErro("mensagem", "erro-mensagem");
        });

        // Validação final ao submeter
        document.getElementById("contatoForm").addEventListener("submit", (e) => {
          e.preventDefault(); // Impede o envio padrão do navegador

          const nome     = document.getElementById("nome").value.trim();
          const email    = document.getElementById("email").value.trim();
          const telefone = document.getElementById("telefone").value.replace(/\D/g, "");
          const assunto  = document.getElementById("assunto").value;
          const mensagem = document.getElementById("mensagem").value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          let formValido = true; // Controla se tudo está correto

          // Valida nome
          if (nome.length < 3) {
            mostrarErro("nome", "erro-nome");
            formValido = false;
          } else {
            mostrarSucesso("nome", "erro-nome");
          }

          // Valida e-mail
          if (!emailRegex.test(email)) {
            mostrarErro("email", "erro-email");
            formValido = false;
          } else {
            mostrarSucesso("email", "erro-email");
          }

          // Valida telefone
          if (telefone.length < 10) {
            mostrarErro("telefone", "erro-telefone");
            formValido = false;
          } else {
            mostrarSucesso("telefone", "erro-telefone");
          }

          // Valida assunto
          if (assunto === "") {
            mostrarErro("assunto", "erro-assunto");
            formValido = false;
          } else {
            mostrarSucesso("assunto", "erro-assunto");
          }

          // Valida mensagem
          if (mensagem.length < 20) {
            mostrarErro("mensagem", "erro-mensagem");
            formValido = false;
          } else {
            mostrarSucesso("mensagem", "erro-mensagem");
          }

          // Se tudo válido: exibe mensagem de sucesso
          if (formValido) {
            const btnEnviar = document.getElementById("btnEnviar");
            btnEnviar.disabled    = true;
            btnEnviar.textContent = "Enviando...";

            // Simula um pequeno delay de envio (como uma requisição real)
            setTimeout(() => {
              document.getElementById("contatoForm").style.display  = "none";
              document.getElementById("alertaSucesso").classList.add("visivel");
            }, 1200);
          }

        });

      }); // fim DOMContentLoaded
