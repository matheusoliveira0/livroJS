//referencia com o form do HTML
const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

//evento que inicia o calculo
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inNome.value; // pega o nome do produto do form
  const preco = Number(frm.inNum.value); // pega o preço unitario do produto do form
  const terceiroProduto = preco / 2; // desconto de 50 % do valor do produto
  const promocao = (preco * 2) + terceiroProduto;// na compra de  3 produtos o 3º sai pela metade do preço

  resp.innerText = `${produto} - Promoção: leve 3 por R$: ${promocao.toFixed(2)}, o 3º sai por apenas R$: ${terceiroProduto.toFixed(2)}`;
});
