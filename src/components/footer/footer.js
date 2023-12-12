// FOOTER
export const renderFooter = () => {
  const containerSelector = document.querySelector('#render_footer');
  const createFooter = document.createElement('footer');
  createFooter.className = 'footer';
  createFooter.textContent = `© Todos los derechos reservados - 2023`;
  containerSelector.appendChild(createFooter);
};
