const valorJantar = Number(prompt("Informe o valor total do jantar:"));
const taxaGarcom = valorJantar * (10 / 100);
const total = valorJantar + taxaGarcom;
//const total = valorJantar + valorJantar*(10/100); // alternativa
//const total = valorJantar * 1.10; // alternativa (100% do valor do jantar + 10% da taxa = 110% do valor)

alert(
  `Taxa do garçom: R$${taxaGarcom.toFixed(2)} \nTotal: R$${total.toFixed(2)}`,
);
