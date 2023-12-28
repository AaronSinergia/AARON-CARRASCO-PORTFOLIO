const curlyBracketsStetic = () => {
  const divCurly = document.createElement('div');
  const h2CurlyLeft = document.createElement('h2');
  const aaronImg = document.createElement('img');
  const h2CurlyRigth = document.createElement('h2');

  divCurly.className = 'curly_and_aaronphoto';
  h2CurlyLeft.className = 'curlybracket';
  h2CurlyLeft.textContent = '{';
  aaronImg.className = 'aaron_photo';
  aaronImg.src = './assets/aaron.png';
  aaronImg.alt = 'aaron_photo';
  h2CurlyRigth.className = 'curlybracket';
  h2CurlyRigth.textContent = '}';

  divCurly.appendChild(h2CurlyLeft);
  divCurly.appendChild(aaronImg);
  divCurly.appendChild(h2CurlyRigth);
  return divCurly.outerHTML;
};

export default curlyBracketsStetic;
