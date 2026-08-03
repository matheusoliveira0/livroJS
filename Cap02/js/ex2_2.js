// cria resferencia ao form e onde a resposta sera mostrada

const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

// cria um envento

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // impede que o form seja enviado

  const filme = frm.inNome.value; // pega os valores do form
  const duracao = Number(frm.inNum.value);

  const horas = Math.floor(duracao / 60); // calcula o resultado
  const mins = duracao % 60;

  resp.innerHTML = `${filme} <br> ${horas}h e ${mins}min `; // exibe a resposta
});
