//cria refênccia com o form e h3 resp
const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

//cria um ouvinte de evento

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; //obtém o nome digitado no form
  resp.innerText = `Olá ${nome}`; // exibe o nome no h3

  e.preventDefault(); // evita o envio do form
});

const x = (10 / 2) * Math.sqrt(9) - 4;
console.log(x);
