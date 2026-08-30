const frm = document.querySelector("form");
const resposta = document.querySelector("#resp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const velPermitida = Number(frm.inNum.value);
  const velCondutor = Number(frm.inNum2.value);

  if (velPermitida >= velCondutor) {
    alert("Sem multa");
  } else if (velPermitida + velPermitida * 0.2 <= velCondutor) {
    alert("multa grave");
  } else {
    alert("multa leve");
  }
});
