const frm = document.querySelector("form");
const resposta = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inNum.value);
  let numDivisores = 0; // declara e inicializa o contador

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      //verifica se i (1,2,3,4...)é divisor do num
      numDivisores++; // se é, incrementa contados
    }
  }
  if (numDivisores == 2) {
    // se possui apenas 2 divisores é primo
    resposta.innerText = `${num} É primo`;
  } else {
    resposta.innerText = `${num} Não é primo`;
  }
});
