const preco = Number(prompt("Informe o preço"));
const desconto = preco * 0.1;
const precoAvista = preco - desconto;
const precoParcelado = preco / 3;

alert(
  `Preço R$: ${preco.toFixed(2)} \n À vista R$: ${precoAvista.toFixed(2)} \n Ou 3x de R$: ${precoParcelado.toFixed(2)}`,
);
