import { projectsList } from '../ProjectsList/ProjectsList';

const projectsGallery = () => {
  const divProjectsGallery = document.createElement('div');
  divProjectsGallery.className = 'general_div_photo_projects';

  for (let i = 0; i < projectsList.length; i++) {
    const projectsListShow = projectsList[i];
    const urlProjectImages = document.createElement('a');
    urlProjectImages.href = projectsListShow.url;
    urlProjectImages.target = '_blank';

    const projectTitle = document.createElement('h2');
    projectTitle.innerHTML = projectsListShow.name;
    projectTitle.className = projectsListShow.name;

    const imageProjectsList = document.createElement('img');
    imageProjectsList.className = 'projects_photos';
    imageProjectsList.id = projectsListShow.name;
    imageProjectsList.src = projectsListShow.image;
    imageProjectsList.alt = projectsListShow.name;

    urlProjectImages.appendChild(projectTitle);
    urlProjectImages.appendChild(imageProjectsList);
    divProjectsGallery.appendChild(urlProjectImages);
  }
  return divProjectsGallery.outerHTML;
};

export default projectsGallery;
