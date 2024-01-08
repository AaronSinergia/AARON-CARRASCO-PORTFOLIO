import './projects_style.css';
import projectsGallery from './projectsComp/projectsGallery';

// PROJECTS BODY
export const renderProjects = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${projectsGallery()}
  `;
};
