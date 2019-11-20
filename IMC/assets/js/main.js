// Capturar evento ao enviar formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

  if (!(peso) || (peso > 500)) {
    setResultado('<div id="error">Peso inválido</div>', false);
    return;
  }

  if (!(altura) || (altura > 2.5)) {
    setResultado('<div id="error">Altura inválida</div>', false);
    return;
  }

    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc(imc);

    const msg = `Seu IMC é de <b>${imc}</b> (${indiceImc}) <br /> <a href="#">Dica de dieta</a>`;

  setResultado(msg, true);
});

function getIndiceImc (imc) {
  const indice = [
    '<span id="subPeso">Abaixo do peso</span>', 
      '<span id="pesoNormal">Peso normal</span>', 
        '<span id="sobPreso">Sobrepeso</span>',
          '<span id="obsGrau1">Obesidade grau 1</span>', 
            '<span id="obsGrau2">Obesidade grau 2</span>',
              '<span id="obsGrau3">Obesidade grau 3</span>'
  ];

      if (imc >= 39.9) return indice[5];
        if (imc >= 34.9) return indice[4];
          if (imc >= 29.9) return indice[3];
            if (imc >= 24.9) return indice[2];
              if (imc >= 18.5) return indice[1];
                if (imc <  18.5) return indice[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#result');
  resultado.innerHTML = '';
  
  resultado.innerHTML = msg;
}
