const frm = document.querySelector("form");
const btnFinalizar = document.querySelector("#btnFinalizar");
const infoArray = document.querySelector("#infoArray");
const resultado = document.querySelector("#resultado");
let lista = [];

function addArray(n) {
  lista.push(n);
}

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(frm.inNumero.value);

  if (numero < 1 || numero > 100) {
    alert("Número inválido");
  } else {
    if (lista.indexOf(numero) != -1) {
      alert("Esse número já foi adicionado");
    } else {
      addArray(numero);
      infoArray.style.visibility = "visible";
      infoArray.innerHTML += `<p>Número ${numero} adicionado</p>`;
    }
  }
});

btnFinalizar.addEventListener("click", (e) => {
  if (lista.length == 0) {
    alert("Adicione pelo menos um número");
  } else {
    resultado.style.visibility = "visible";
    // quantidade de numeros na lista
    let qtdNum = lista.length;
    // menor valor da lista
    let menorNum = Math.min(...lista);

    // maior valor da lista
    let maiorNum = Math.max(...lista);

    // soma de todos os valores da lista
    let soma = 0;
    for (let num of lista) {
      soma += num;
    }

    // media dos valores
    let media = (soma / lista.length).toFixed(2);

    resultado.innerHTML = `
  Ao todo temos ${qtdNum} <br> 
  O menor valor infomado: ${menorNum} <br> 
  O maior valor infomado: ${maiorNum} <br> 
  A soma de todos os valores: ${soma} <br> 
  A Media dos valores: ${media}`;
  }
});
