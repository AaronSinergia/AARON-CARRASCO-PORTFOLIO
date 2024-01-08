import './projects_style.css';
import projectsGallery from './projectsComp/projectsGallery';
import openTitlePhoto from './visualEffects/openTitlePhoto';

// PROJECTS BODY
export const renderProjects = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${projectsGallery()}
  `;

  openTitlePhoto();
};
