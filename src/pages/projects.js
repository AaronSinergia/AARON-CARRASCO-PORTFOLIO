import { projectsList } from '../components/ProjectsList';

// PROJECTS TITLE
const bodyProjectsData = () => {
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.innerHTML = '.../Proyectos';
  return h1.outerHTML;
};

for (let i = 0; i < projectsList.length; i++) {
  const projectsListShow = projectsList[i];
  const projectsBox = document.createElement('div');
  projectsBox.className = 'projects_list';
  projectsBox.value = projectsListShow.name;
}

// PROJECTS GALLERY
const bodyProjectsGallery = () => {
  const divProjectsGallery = document.createElement('div');
  divProjectsGallery.innerHTML = 'projectsBox.value';
};

// PROJECTS BODY
export const renderProjects = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${bodyProjectsData()}
    ${bodyProjectsGallery()}
  `;
};
