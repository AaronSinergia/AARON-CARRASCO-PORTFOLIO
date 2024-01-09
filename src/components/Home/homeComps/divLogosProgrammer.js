const divLogosProgrammer = () => {
  const divLogosProgrammer = document.createElement('div');
  divLogosProgrammer.className = 'div_logos_programmer';

  const hmtl = document.createElement('img');
  hmtl.src = './assets/html.gif';
  hmtl.alt = 'hmtl_gif';
  const css = document.createElement('img');
  css.src = './assets/css.gif';
  css.alt = 'css_gif';
  const js = document.createElement('img');
  js.src = './assets/js.gif';
  js.alt = 'js_gif';
  const react = document.createElement('img');
  react.src = './assets/react.gif';
  react.alt = 'react_gif';

  divLogosProgrammer.appendChild(react);
  divLogosProgrammer.appendChild(js);
  divLogosProgrammer.appendChild(css);
  divLogosProgrammer.appendChild(hmtl);
  return divLogosProgrammer.outerHTML;
};

export default divLogosProgrammer;
