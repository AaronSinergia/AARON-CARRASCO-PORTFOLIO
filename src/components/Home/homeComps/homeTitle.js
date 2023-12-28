const homeTitle = () => {
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.textContent = '.../AARON_CARRASCO';
  return h1.outerHTML;
};

export default homeTitle;
