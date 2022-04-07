let totalCartas = 0;

let elementoClicado = '';

// selecionar qnts cartas
function escolherQuantidadeCartas() {
  totalCartas = prompt('Selecione o total de cartas');

  if (totalCartas % 2 !== 0) {
    escolherQuantidadeCartas();
  } else {
    if (totalCartas >= 4 && totalCartas <= 14) {
      return;
    } else {
      escolherQuantidadeCartas();
    }
  }
}
escolherQuantidadeCartas();

// dados das cartas
const cartasData = [
  {
    id: 'bobrossparrot',
    src: 'bobrossparrot.gif',
  },
  {
    id: 'explodyparrot',
    src: 'explodyparrot.gif',
  },
  {
    id: 'fiestaparrot',
    src: 'fiestaparrot.gif',
  },
  {
    id: 'metalparrot',
    src: 'metalparrot.gif',
  },
  {
    id: 'revertitparrot',
    src: 'revertitparrot.gif',
  },
  {
    id: 'tripletsparrot',
    src: 'tripletsparrot.gif',
  },
  {
    id: 'unicornparrot',
    src: 'unicornparrot.gif',
  },
];

// randomiza a ordem dos dados das cartas
function randomizarCartasData(cartas) {
  cartas.sort(() => Math.random() - 0.5);
}
randomizarCartasData(cartasData);

function checarCarta(element) {
  console.log(element);
}

function gerarCartas(cartas) {
  const arrayCartasDiv = [];
  let totalParesCartas = totalCartas / 2;

  while (totalParesCartas > 0) {
    const carta = `
      <div onclick='checarCarta(this)' class='card' name='${
        cartas[totalParesCartas - 1].id
      }'>
        <img src='./assets/images/front.png'/>
        <img src='./assets/images/${
          cartas[totalParesCartas - 1].src
        }' class='hidden'/>
      </div>
    `;

    // colocar no array um par de cartas iguais
    arrayCartasDiv.push(carta);
    arrayCartasDiv.push(carta);

    totalParesCartas--;
  }

  // randomizar o array com os elementos e renderizar
  arrayCartasDiv.sort(() => Math.random() - 0.5);
  arrayCartasDiv.forEach((cartaDiv) => {
    document.getElementById('cards').innerHTML += cartaDiv;
  });
}
gerarCartas(cartasData);
