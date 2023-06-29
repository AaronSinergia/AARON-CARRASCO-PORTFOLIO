import '../projects_style.css';
import { projectsList } from '../components/ProjectsList';

// PROJECTS TITLE
const bodyProjectsHeader = () => {
  const h1 = document.createElement('h1');

  h1.className = 'title_name';
  h1.innerHTML = '.../Proyectos';

  return h1.outerHTML;
};

// CURLY  BRACKETS UPSIDEDOWN
const curlyUp = () => {
  const h2CurlyUp = document.createElement('h2');
  h2CurlyUp.className = 'curly_up';
  h2CurlyUp.textContent = '{';

  return h2CurlyUp.outerHTML;
};

// PROJECTS GALLERY
const bodyProjectsGallery = () => {
  const divProjectsGallery = document.createElement('div');
  divProjectsGallery.className = 'general_div_photo_projects';

  for (let i = 0; i < projectsList.length; i++) {
    const projectsListShow = projectsList[i];
    const urlProjectImages = document.createElement('a');
    const imageProjectsList = document.createElement('img');

    urlProjectImages.href = projectsListShow.url;
    imageProjectsList.className = 'projects_photos';
    imageProjectsList.src = projectsListShow.image;
    imageProjectsList.alt = projectsListShow.name;
    urlProjectImages.appendChild(imageProjectsList);
    divProjectsGallery.appendChild(urlProjectImages);
  }
  return divProjectsGallery.outerHTML;
};

// CURLY  BRACKETS UPSIDEDOWN
const curlyDown = () => {
  const h2CurlyDown = document.createElement('h2');
  h2CurlyDown.className = 'curly_down';
  h2CurlyDown.textContent = '}';

  return h2CurlyDown.outerHTML;
};

// PROJECTS BODY
export const renderProjects = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${bodyProjectsHeader()}
    ${curlyUp()}
    ${bodyProjectsGallery()}
    ${curlyDown()}
  `;
};
