import experienceTitle from './experienceComps/experienceTitle';
import workGallery from './experienceComps/workGallery';
import './experience_style.css';
import openPhotoEffect from './visualEffects/openPhotoEffect';
import overlayPhoto from './visualEffects/overlayPhoto';

export const renderExperience = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${experienceTitle()}
    ${workGallery()}
    ${overlayPhoto()}
  `;

  openPhotoEffect();
};
