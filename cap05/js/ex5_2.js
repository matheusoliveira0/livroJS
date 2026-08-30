const frm = document.querySelector("form");
const resposta = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);
  let calculo = `Entre ${num} e 1 : `;
  for (let i = num; i > 1; i--) {
    calculo = calculo + i + ", ";
  }
  resposta.innerText = `${calculo}1.`;
});
