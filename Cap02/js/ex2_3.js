// faz referncia ao formulario do HTML
const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

// cria o evento

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // impede que o form seja enviado

  const veiculo = frm.inNome.value; // pega os valores do form
  const preco = Number(frm.inNum.value);

  const entrada = preco * 0.5; // calcula 50% do valor do veiculo para entrada
  const parcela = (preco - entrada) / 12; // calcula o valor da parcela em 12x

  //exibe a resposta
  resp.innerHTML = `Promoção: ${veiculo} <br> 
    Entrada de R$: ${entrada.toFixed(2)} <br> 
    + 12X de R$: ${parcela.toFixed(2)}`;

  console.log(entrada);
  console.log(parcela.toFixed(2));
});
