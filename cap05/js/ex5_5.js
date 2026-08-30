const frm = document.querySelector("form");
const resposta1 = document.querySelector("#resp1");
const resposta2 = document.querySelector("#resp2");

let resposta = ""; //string com resposta a ser exibida
let numContas = 0; // inicializa p contador
let valTotal = 0; // acumulador (variaveis globais)
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const descricao = frm.inDescricao.value;
  const valor = Number(frm.inNum.value);

  numContas++; //adiciona valores ao contador e acumulador
  valTotal += valTotal + valor;
  resposta = `${resposta + descricao} - R$ ${valor.toFixed(2)} \n`;
  resposta1.innerText = `${resposta}-------------------------------`;
  resposta2.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`;

  frm.inDescricao.value = ""; //limpa os campos do form
  frm.inNum.value = "";
  frm.inDescricao.focus(); //posiciona no campo de descrição do form
});
