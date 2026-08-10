const frm = document.querySelector("form"); // cria referencia com o form e elemento onde resposta sera exibida
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

// cria um ouvinte que é acionado quando o botão de submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita envio do form

  const saque = Number(frm.inSaque.value);
  if (saque % 10 != 0) {
    alert("Valor inválido para notas disponiveis (10, 50, 100)");
    frm.inSaque.focus();
    return;
  }
  const notasCem = Math.floor(saque / 100); // calcula as notas de 100
  let resto = saque % 100; // quanto sobra para pagar
  const notasCinquenta = Math.floor(resto / 50); // calcula notas de 50
  resto = resto % 50; // quanto ainda sobra
  const notasDez = Math.floor(resto / 10); //calcula notas 10

  if (notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de R$: ${notasDez}`;
  }
});
