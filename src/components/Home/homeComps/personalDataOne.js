const personalDataOne = () => {
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  divDataBox.className = 'data_box_1';
  h3.className = 'datos_personales';
  h3.innerText =
    './RESIDENCIA/BCN.html ./EDAD/33_AÑOS.css ./ACTUALMENTE/DXC/HelpDeskIt.js';
  divDataBox.appendChild(h3);
  const h3Word = document.createElement('h3');
  h3Word.className = 'frase';
  h3Word.textContent =
    '"Los peces muertos son los únicos que siguen la corriente"';
  divDataBox.appendChild(h3Word);
  divDataBox.appendChild(h3);
  return divDataBox.outerHTML;
};

export default personalDataOne;
