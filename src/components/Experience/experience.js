import './experience_style.css';
import workGallery from './experienceComps/workGallery';
import openPhotoEffect from './visualEffects/openPhotoEffect';
import overlayPhoto from './visualEffects/overlayPhoto';

export const renderExperience = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${workGallery()}
    ${overlayPhoto()}
  `;

  openPhotoEffect();
};
