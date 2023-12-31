import './projects_style.css';
import projectsGallery from './projectsComp/projectsGallery';
import projectsHeader from './projectsComp/projectsHeader';

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

// PROJECTS BODY
export const renderProjects = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${projectsHeader()}
    ${projectsGallery()}
  `;
};
