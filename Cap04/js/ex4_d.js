const frm = document.querySelector("form");
const resposta = document.querySelector("#resp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inNum1.value);
  const ladoB = Number(frm.inNum2.value);
  const ladoC = Number(frm.inNum3.value);

  if (
    ladoA >= ladoB + ladoC ||
    ladoB >= ladoA + ladoC ||
    ladoC >= ladoA + ladoB
  ) {
    resposta.innerText = `Não é um triângulo`;
  } else {
    resposta.innerText = `Lados podem formar um triângulo`;
    if (ladoA == ladoB && ladoC == ladoA) {
      resposta.innerText += " Equilátero";
    } else if (
      (ladoA == ladoB && ladoB != ladoC) ||
      (ladoB == ladoC && ladoC != ladoA) ||
      (ladoC == ladoA && ladoA != ladoB)
    ) {
      resposta.innerText += " Isósceles";
    } else {
      resposta.innerText += " Escaleno";
    }
  }
});
