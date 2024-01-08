const divLogosProgrammer = () => {
  const divLogosProgrammer = document.createElement('div');
  divLogosProgrammer.className = 'div_logos_programmer';

  const hmtl = document.createElement('img');
  hmtl.src = '../../../../public/assets/html.gif';
  hmtl.alt = 'hmtl_gif';

  hmtl.addEventListener('click', function () {
    console.log('hola');
  });

  const css = document.createElement('img');
  css.src = '../../../../public/assets/css.gif';
  css.alt = 'css_gif';
  const js = document.createElement('img');
  js.src = '../../../../public/assets/js.gif';
  js.alt = 'js_gif';
  const react = document.createElement('img');
  react.src = '../../../../public/assets/react.gif';
  react.alt = 'react_gif';

  divLogosProgrammer.appendChild(react);
  divLogosProgrammer.appendChild(js);
  divLogosProgrammer.appendChild(css);
  divLogosProgrammer.appendChild(hmtl);
  return divLogosProgrammer.outerHTML;
};

export default divLogosProgrammer;
