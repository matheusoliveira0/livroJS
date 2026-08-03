const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorMin = frm.inNum1.value;
  const tempoUso = frm.inNum2.value;
  const aPagar = Math.ceil(tempoUso / 15) * valorMin;

  resp.innerText = `Valor a pagar R$: ${aPagar.toFixed(2)}`;
});
