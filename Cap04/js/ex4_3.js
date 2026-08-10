const bairro = prompt("Informe o bairro:");
let taxaEntrega;

switch (bairro) {
  case "Centro":
    taxaEntrega = 5.0;
    break;
  case "Fragata":
  case "Três Marias":
    taxaEntrega = 7.0;
    break;
  case "Laranjal":
    taxaEntrega = 10.0;
    break;
  default:
    taxaEntrega = 8.0;
}

alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`);
