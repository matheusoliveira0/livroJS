const prompt = require("prompt-sync")();

const numero = prompt("Digite uma centena: ");

if (numero < 100 || numero >= 1000) {
  console.log("Erro... deve ser uma centena");
  return;
}

const num1 = Math.floor(numero / 100); // obtem o 1º numero
const sobra = numero % 100; // o que sobra (dezena)
const num2 = Math.floor(sobra / 10); // obtém o 2º número
const num3 = sobra % 10; // obtém o 3º número

console.log(`Invertido: ${num3}${num2}${num1}`);
