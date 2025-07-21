// Carrossel de depoimentos
let indexAtual = 0;
const depoimentos = document.querySelectorAll('.depoimento');

function mostrarProximo() {
  depoimentos[indexAtual].classList.remove('ativo');
  indexAtual = (indexAtual + 1) % depoimentos.length;
  depoimentos[indexAtual].classList.add('ativo');
}

setInterval(mostrarProximo, 4000); // troca a cada 4 segundos

// Acordeão TCC
document.addEventListener("DOMContentLoaded", function () {
  const acc = document.querySelector(".accordion");
  const panel = document.querySelector(".panel");

  if(acc && panel){
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.paddingBottom = "0";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.paddingBottom = "1rem";
      }
    });
  }
});
