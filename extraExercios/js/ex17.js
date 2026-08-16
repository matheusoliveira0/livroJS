const frm = document.querySelector("form");
const resposta = document.querySelector("#resp");

// Adiciona um evento ao formulário para executar o código ao ser enviado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão de envio do formulário

  resposta.innerHTML = ""; // Limpa o resultado anterior
  resposta.style.background = "rgba(100, 148, 237, 0.195)";

  if (frm.inNumero.value == "") {
    //  Verifica se o campo está vazio
    resposta.innerText = "Por favor digite um número";
  } else {
    let numero = Number(frm.inNumero.value);

    for (let i = 0; i <= 10; i++) {
      let paragrafo = document.createElement("p");
      paragrafo.innerHTML = `${numero} X ${i} = ${numero * i}`;
      resposta.appendChild(paragrafo);
    }
  }
});
