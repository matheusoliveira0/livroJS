// referencia ao form HTML

const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

//evento

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  // pega os valores do form
  const medicamento = frm.inNome.value;
  const preco = Number(frm.inNum.value);

  const total = preco * 2; //total da compra
  const desconto = (total - Math.floor(total)).toFixed(2); // calcula os centavos a descontar
  const promocao = total - desconto;

  console.log(total);
  console.log(desconto);
  console.log(promocao);

  resp.innerText = `Promoção de ${medicamento}, leve 2 por apenas R$: ${promocao}`;
});
