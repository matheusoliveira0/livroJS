// cria a ligaão com formulario e campo de resposta do HTML

const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

// envento

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //btn n envia o form

  // pega os valores do form para fazer o calculo
  const quilo = Number(frm.inNum1.value);
  const consumoCliente = Number(frm.inNum2.value);

  // calculo
  const precoApagar = ((quilo * consumoCliente) / 1000).toFixed(2);

  //exibe a resposta
  resp.innerText = `Valor a pagar R$: ${precoApagar}`;
});
