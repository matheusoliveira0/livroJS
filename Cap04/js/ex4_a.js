const frm = document.querySelector("form");
const resposta = document.querySelector("#resp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);
  /* if (num % 2 == 0) {
    resposta.innerText = `É par`;
  } else {
    resposta.innerText = `É ímpar`;
}
*/

  num % 2 == 0
    ? (resposta.innerText = "É par")
    : (resposta.innerText = "É ímpar");
});
