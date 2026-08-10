const frm = document.querySelector("form"); // cria relaçao com o form e o resp do HTML
const resp = document.querySelector("#resp");
const paragrafos = resp.querySelectorAll("p");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeAluno = frm.inNome.value; //pega os valores do form
  const nota1 = Number(frm.inNum1.value);
  const nota2 = Number(frm.inNum2.value);

  const media = (nota1 + nota2) / 2; //faz o calculo da media do aluno

  paragrafos[0].innerText = `Média das notas: ${media.toFixed(1)}`;

  //condição para verficar o status do aluno

  if (media >= 6) {
    paragrafos[1].innerText = `Parabéns ${nomeAluno}! Você foi aprovado(a)`;
    paragrafos[1].style.color = "green";
  } else {
    paragrafos[1].innerText = `${nomeAluno} você foi reprovado`;
    paragrafos[1].style.color = "red";
  }
});
