import '../style.css';

// HOME TITLE
const bodyHomeTitle = () => {
  const containerSelector = document.querySelector('#container');
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.textContent = '.../AARON_CARRASCO';
  containerSelector.appendChild(h1);
};

// BODY HOME DATA BOX 1
const bodyHomeData = () => {
  const containerSelector = document.querySelector('#container');
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  divDataBox.className = 'data_box_1';
  h3.className = 'datos_personales';
  h3.innerText =
    './RESIDENCIA/BCN.html ./EDAD/32_AÑOS.css ./ACTUALMENTE/DXC/HelpDeskIt.js';
  divDataBox.appendChild(h3);
  const h3Word = document.createElement('h3');
  h3Word.className = 'frase';
  h3Word.textContent =
    '"Los peces muertos son los únicos que siguen la corriente"';
  divDataBox.appendChild(h3Word);
  divDataBox.appendChild(h3);
  containerSelector.appendChild(divDataBox);
};
// BODY HOME CURLY BRACKETS AND PRINCIPAL PHOTO
const bodyHomeCurly = () => {
  const containerSelector = document.querySelector('#container');
  const divCurly = document.createElement('div');
  const h2CurlyLeft = document.createElement('h2');
  const aaronImg = document.createElement('img');
  const h2CurlyRigth = document.createElement('h2');

  divCurly.className = 'curly_and_aaronphoto';
  h2CurlyLeft.className = 'curlybracket';
  h2CurlyLeft.textContent = '{';
  aaronImg.className = 'aaron_photo';
  aaronImg.src = '../src/img/aaron.png';
  aaronImg.alt = 'aaron_photo';
  h2CurlyRigth.className = 'curlybracket';
  h2CurlyRigth.textContent = '}';

  divCurly.appendChild(h2CurlyLeft);
  divCurly.appendChild(aaronImg);
  divCurly.appendChild(h2CurlyRigth);
  containerSelector.appendChild(divCurly);
};
// BODY HOME DATA BOX 2
const bodyHomeData2 = () => {
  const containerSelector = document.querySelector('#container');
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  const h3Two = document.createElement('h3');

  divDataBox.className = 'data_box_2';
  h3.className = 'my_aspirations';
  h3.innerText =
    'Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.';
  h3Two.className = 'my_work_valors';
  h3Two.textContent =
    'Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.';

  divDataBox.appendChild(h3);
  divDataBox.appendChild(h3Two);
  containerSelector.appendChild(divDataBox);
};

// RENDER HOME
export const renderHome = () => {
  bodyHomeTitle();
  bodyHomeData();
  bodyHomeCurly();
  bodyHomeData2();
};
