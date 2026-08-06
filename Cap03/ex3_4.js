const prompt = require("prompt-sync")(); //add pacote ao programa

const pesoRacao = Number(prompt("Peso da ração(kg): ")); // lê peso do pacote
const racaoGramas = pesoRacao * 1000; // converte peso para gramas
const consumoDia = Number(prompt("Consumo diario(gr): ")); //lê o consumo diario do gato

const duracaoRacao = Math.floor(racaoGramas / consumoDia); // calcula quantos dia ira durar o pacote de ração
const sobra = racaoGramas % consumoDia;

console.log(`O pacote de ração ira durar por ${duracaoRacao} dias`);
console.log(`O sobra ${sobra}gr`);
