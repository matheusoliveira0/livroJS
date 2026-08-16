const frm = document.querySelector("form");
const resposta = document.querySelector("#resp");

// Executa o código quando o formulário é enviado

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  resposta.innerText = "";
  resposta.style.background = "rgba(100, 148, 237, 0.195)";

  if (
    frm.inInicio.value == 0 ||
    frm.inFim.value == 0 ||
    frm.inPasso.value == 0
  ) {
    resposta.innerText = "Digite números validos para a contagem";
  } else {
    let inicio = Number(frm.inInicio.value);
    let fim = Number(frm.inFim.value);
    let passo = Number(frm.inPasso.value);
    if (passo <= 0) {
      resposta.innerHTML += `Passo inválido! Considerando passo 1 <br>`;
      passo = 1;
    }

    if (inicio <= fim) {
      for (let i = inicio; i <= fim; i += passo) {
        resposta.innerHTML += `${i} \u{002D} `;
      }
    } else if (inicio >= fim) {
      for (i = inicio; i >= fim; i -= passo) {
        resposta.innerHTML += `${i} \u{002D} `;
      }
    }
    resposta.innerHTML += `\u{1f3c1} `;
  }
});
