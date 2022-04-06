let totalCartas = 0;

// selecionar qnts cartas
function escolherQuantidadeCartas() {
  totalCartas = prompt('Selecione o total de cartas');

  if (totalCartas % 2 !== 0) {
    escolherQuantidadeCartas();
  } else {
    if (totalCartas >= 4 && totalCartas <= 14) {
      console.log('ok');
    } else {
      escolherQuantidadeCartas();
    }
  }
}
escolherQuantidadeCartas();
