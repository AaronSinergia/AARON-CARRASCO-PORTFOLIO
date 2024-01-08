const personalDataTwo = () => {
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  const h3Two = document.createElement('h3');

  divDataBox.className = 'data_box_2';
  h3.className = 'my_aspirations';
  h3.innerText =
    'Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.';
  h3Two.className = 'my_work_valors';
  h3Two.textContent =
    'Actualmente trabajo en una empresa IT, ofreciendo servicios a un banco. Además, trabajo como músico de sesión y grabando para otros artistas.';

  divDataBox.appendChild(h3);
  divDataBox.appendChild(h3Two);
  return divDataBox.outerHTML;
};

export default personalDataTwo;
