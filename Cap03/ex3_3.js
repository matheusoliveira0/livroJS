const prompt = require("prompt-sync")();

const sal = Number(prompt("Salario R$: "));
const anosServico = Number(prompt("Anos de serviço: "));
const quadricenios = Math.floor(anosServico / 4);
const acrescimo = (sal * quadricenios) / 100;
const salarioFinal = sal + acrescimo;

console.log(`Quadricenios: ${quadricenios}`);
console.log(`Salario Final R$: ${salarioFinal.toFixed(2)}`);
