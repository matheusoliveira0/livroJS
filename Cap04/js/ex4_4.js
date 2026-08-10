const frm = document.querySelector("form"); // cria referencia com o form e elemento onde resposta sera exibida
const resp = document.querySelector("#resp");

// cria um ouvinte que é acionado quando o botão de submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita envio do form

  // obtém e converte o conteúdo do campoinHorabrasil
  const horaBrasil = Number(frm.inHoraBrasil.value);
  let horaFranca = horaBrasil + 5; // calcula horario na França
  if (horaFranca > 24) {
    //se passar das 24horas na França
    horaFranca = horaFranca - 24; //... subtrai 24
  }

  resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`; // exibe a resposta
});
