import '../experience_style.css';
import { experienceList } from '../components/ExperienceList';

// EXPERIENCE TITLE
const bodyExperienceData = () => {
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.innerHTML = '.../Experiencia';
  return h1.outerHTML;
};

// GALLERY EXPERIENCE IMAGES
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

// OVERLAY EFFECT
const overlayPhoto = () => {
  const createOverlay = document.createElement('div');
  const createSlideshow = document.createElement('div');
  const createCloseButton = document.createElement('span');
  const imgSlideShow = document.createElement('img');
  const createImgInfo = document.createElement('h2');
  createImgInfo.className = 'text_img_description';

  createOverlay.className = 'overlay hidden';
  createSlideshow.className = 'slideshow';
  createCloseButton.className = 'btn_close';
  createCloseButton.textContent = 'X';
  imgSlideShow.src = '';
  imgSlideShow.alt = '';
  imgSlideShow.id = 'img_slideshow';

  createSlideshow.appendChild(createImgInfo);
  createSlideshow.appendChild(imgSlideShow);
  createSlideshow.appendChild(createCloseButton);
  createOverlay.appendChild(createSlideshow);

  return createOverlay.outerHTML;
};

// CURLY  BRACKETS EXPERIENCE DOWN
const curlyDown = () => {
  const h2CurlyDown = document.createElement('h2');
  h2CurlyDown.className = 'curly_experience_down';
  h2CurlyDown.textContent = '}';

  return h2CurlyDown.outerHTML;
};

export const renderExperience = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${bodyExperienceData()}
    ${workGallery()}
    ${overlayPhoto()}
    ${curlyDown()}
  `;

  // Abrir imagen clicada con overlay
  const clickImageListener = (ev) => {
    const overlay = document.querySelector('.overlay');
    const imgSlideshow = document.querySelector('#img_slideshow');
    const clickedImage = ev.target;
    const imageSource = clickedImage.getAttribute('src');
    const imageNum = clickedImage.dataset.imgShow;

    // Eliminar cualquier información existente
    const previousImgInfo = document.querySelector('.text_img_description');
    if (previousImgInfo) {
      previousImgInfo.remove();
    }

    imgSlideshow.setAttribute('src', imageSource);
    overlay.classList.remove('hidden');

    const createImgInfo = document.createElement('h2');
    createImgInfo.className = 'text_img_description';
    createImgInfo.textContent = imageNum;

    const slideshowSelected = document.querySelector('.slideshow');
    slideshowSelected.insertBefore(createImgInfo, imgSlideshow);
  };

  // Evento de click para cada imagen, y cargo el evento de que hacer arriba
  const images = document.querySelectorAll('.column');
  images.forEach((image) => {
    image.addEventListener('click', clickImageListener);
  });

  // Cerrar ventana overlay e imagen
  const clickCloseListener = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');

    // Eliminar cualquier información existente
    const previousImgInfo = document.querySelector('.img_exp_text');
    if (previousImgInfo) {
      previousImgInfo.remove();
    }
    // createImgInfo.textContent = ''; ---> revisar si es preciso
  };
  const closeButton = document.querySelector('.btn_close');
  closeButton.addEventListener('click', clickCloseListener);
};
