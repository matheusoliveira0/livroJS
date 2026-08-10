const frm = document.querySelector("form"); // cria referencia com o form e elemento onde resposta sera exibida
const resp = document.querySelector("#resp");

// cria um ouvinte que é acionado quando o botão de submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita envio do form

  const numero = Number(frm.inNum.value); // obtém e converte o conteúdo do form
  const raizQuadrada = Math.sqrt(numero); // calcula a raiz do numero

  if (Number.isInteger(raizQuadrada)) {
    // se o valor for um numero inteiro
    resp.innerText = `Raiz: ${raizQuadrada}`; // mostra a raiz
  } else {
    resp.innerText = `Raiz não exata para ${numero}`;
  }
});
