// HEADER
export const renderHeader = () => {
  const containerSelector = document.querySelector('#header');
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.textContent = '.../AARON_CARRASCO';
  containerSelector.appendChild(h1);
};
