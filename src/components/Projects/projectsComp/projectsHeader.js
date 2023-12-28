const projectsHeader = () => {
  const h1 = document.createElement('h1');

  h1.className = 'title_name';
  h1.innerHTML = '.../Proyectos';

  return h1.outerHTML;
};

export default projectsHeader;
