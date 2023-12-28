import { projectsList } from '../ProjectsList/ProjectsList';

const projectsGallery = () => {
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

export default projectsGallery;
