const frm = document.querySelector("form");
const resp = document.querySelector("#resp"); // cria referencia coom o form e resp do HTML

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const altura = Number(frm.inNum1.value); // pega os dados do form
  const sexoFem = frm.inFeminino.checked;

  let pesoIdeal;

  if (sexoFem) {
    pesoIdeal = 21 * Math.pow(altura, 2); // Math.pow() eleva ao quadrado
  } else {
    pesoIdeal = 22 * Math.pow(altura, 2);
  }
  resp.innerText = `${nome} seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`; //apresenta a resposta na div resp no HTML
});

frm.addEventListener("reset", () => {
  resp.innerText = ""; // limpa o conteúdo da div resp
});
