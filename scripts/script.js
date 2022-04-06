let totalCartas = 0;

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

function gerarCartas(cartas) {
  const arrayCartasDiv = [];
  let totalParesCartas = totalCartas / 2;

  while (totalParesCartas > 0) {
    const div = document.createElement('div');
    div.classList.add('card', 'baixo');
    const imageFront = document.createElement('img');
    imageFront.src = './assets/images/front.png';
    div.appendChild(imageFront);
    // imagem back (gif)
    const imageBack = document.createElement('img');
    imageBack.src = './assets/images/' + cartas[totalParesCartas - 1].src;
    imageBack.classList.add('hidden');
    div.appendChild(imageBack);

    // carta gemea
    const div2 = document.createElement('div');
    div2.classList.add('card', 'baixo');
    const imageFront2 = document.createElement('img');
    imageFront2.src = './assets/images/front.png';
    div2.appendChild(imageFront2);
    // imagem back (gif)
    const imageBack2 = document.createElement('img');
    imageBack2.src = './assets/images/' + cartas[totalParesCartas - 1].src;
    imageBack2.classList.add('hidden');
    div2.appendChild(imageBack2);

    // colocar no array um par de cartas iguais
    arrayCartasDiv.push(div);
    arrayCartasDiv.push(div2);

    // document.getElementById('cards').appendChild(div);

    totalParesCartas--;
  }

  // randomizar o array com os elementos e renderizar
  arrayCartasDiv.sort(() => Math.random() - 0.5);
  arrayCartasDiv.forEach((cartaDiv) => {
    document.getElementById('cards').appendChild(cartaDiv);
  });
}
gerarCartas(cartasData);
