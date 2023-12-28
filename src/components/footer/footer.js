// FOOTER
export const renderFooter = () => {
  const containerSelector = document.querySelector('#render_footer');
  const createFooter = document.createElement('footer');
  const pFooter = document.createElement('p');
  createFooter.className = 'footer';
  pFooter.textContent = `© Todos los derechos reservados - 2023`;
  createFooter.appendChild(pFooter);
  containerSelector.appendChild(createFooter);
};
