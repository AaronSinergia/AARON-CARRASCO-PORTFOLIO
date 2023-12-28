import { experienceList } from '../../Experience/ExperienceList/ExperienceList';

const workGallery = () => {
  const sectionGallery = document.createElement('section');
  const divGalleryColumn = document.createElement('div');

  sectionGallery.className = 'gallery';
  divGalleryColumn.className = 'column';

  for (let i = 0; i < experienceList.length; i++) {
    const experienceListShow = experienceList[i];
    const imageExperienceList = document.createElement('img');

    imageExperienceList.src = experienceListShow.image;
    imageExperienceList.alt = experienceListShow.alt;
    imageExperienceList.setAttribute(
      'data-img-show',
      experienceListShow.dataset
    );
    divGalleryColumn.appendChild(imageExperienceList);
    sectionGallery.appendChild(divGalleryColumn);
  }
  return sectionGallery.outerHTML;
};

export default workGallery;
