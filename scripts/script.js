let totalCartas = 0;

let elementoClicado = '';

let isSelected = false;
let cartaSelecionada = '';
let emEspera = false;

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
  if (element.classList.contains('clicked') || emEspera) {
    console.log('ja foi acertado mano ou tem q esperar');
    return;
  }
  if (isSelected) {
    element.classList.add('clicked');
    const nameCartaSelecionada = element.attributes.name.value;
    const nameCartaAnteriorSelecionada = cartaSelecionada.attributes.name.value;

    if (nameCartaAnteriorSelecionada === nameCartaSelecionada) {
      // acerto
    } else {
      emEspera = true;

      setTimeout(() => {
        element.classList.remove('clicked');
        cartaSelecionada.classList.remove('clicked');
        emEspera = false;
      }, 1000);
    }

    isSelected = false;
  } else {
    cartaSelecionada = element;

    element.classList.add('clicked');
    isSelected = true;
  }
}

function gerarCartas(cartas) {
  const arrayCartasDiv = [];
  let totalParesCartas = totalCartas / 2;

  while (totalParesCartas > 0) {
    const carta = `
      <div onclick='checarCarta(this)' class='card' name='${
        cartas[totalParesCartas - 1].id
      }'>
        <div class='front face'>
          <img src='./assets/images/front.png'/>
        </div>
        <div class='back face'>
          <img src='./assets/images/${cartas[totalParesCartas - 1].src}'/>
        </div>
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
