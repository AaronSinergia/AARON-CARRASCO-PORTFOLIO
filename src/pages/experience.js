import '../experience_style.css';
import '../style.css';

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
  const rnovaImg = document.createElement('img');
  const emergiaImg = document.createElement('img');
  const vodafoneImg = document.createElement('img');
  const argomImg = document.createElement('img');
  const dxcImg = document.createElement('img');

  sectionGallery.className = 'gallery';
  divGalleryColumn.className = 'column';
  rnovaImg.className = 'rnovaimg';
  rnovaImg.src = '../../src/img/rnova-sll_li1.png';
  rnovaImg.alt = 'rnova_logo';
  rnovaImg.dataset.imgShow = '0';
  emergiaImg.src = '../../src/img/emergia.jpg';
  emergiaImg.alt = 'emergia_logo';
  emergiaImg.dataset.imgShow = '1';
  vodafoneImg.src = '../../src/img/vodafone.png';
  vodafoneImg.alt = 'vodafone_logo';
  vodafoneImg.dataset.imgShow = '2';
  argomImg.src = '../../src/img/argom.jpeg';
  argomImg.alt = 'argom_logo';
  argomImg.dataset.imgShow = '3';
  dxcImg.src = '../../src/img/dxc.png';
  dxcImg.alt = 'dxc_logo';
  dxcImg.dataset.imgShow = '4';

  divGalleryColumn.appendChild(rnovaImg);
  divGalleryColumn.appendChild(emergiaImg);
  divGalleryColumn.appendChild(vodafoneImg);
  divGalleryColumn.appendChild(argomImg);
  divGalleryColumn.appendChild(dxcImg);
  sectionGallery.appendChild(divGalleryColumn);
  return sectionGallery.outerHTML;
};

// OVERLAY EFFECT
const overlayPhoto = () => {
  const createOverlay = document.createElement('div');
  const createSlideshow = document.createElement('div');
  const createCloseButton = document.createElement('span');
  const prevButton = document.createElement('div');
  const createLeftButton = document.createElement('button');
  const nextButton = document.createElement('div');
  const createRightButton = document.createElement('button');
  const imgSlideShow = document.createElement('img');

  createOverlay.className = 'overlay hidden';
  createSlideshow.className = 'slideshow';
  createCloseButton.className = 'btn_close';
  createCloseButton.textContent = 'X';
  prevButton.className = 'button prev';
  createLeftButton.textContent = '{';
  nextButton.className = 'button next';
  createRightButton.textContent = '}';
  imgSlideShow.src = '';
  imgSlideShow.alt = '';
  imgSlideShow.id = 'img_slideshow';

  createSlideshow.appendChild(imgSlideShow);
  nextButton.appendChild(createRightButton);
  createSlideshow.appendChild(nextButton);
  prevButton.appendChild(createLeftButton);
  createSlideshow.appendChild(prevButton);
  createSlideshow.appendChild(createCloseButton);
  createOverlay.appendChild(createSlideshow);
  return createOverlay.outerHTML;
};

// Abrir imagen clicada con overlay
const clickImageListener = (ev) => {
  const overlay = document.querySelector('.overlay');
  const createImgInfo = document.createElement('h2');
  const imgSlideshow = document.querySelector('#img_slideshow');
  const clickedImage = ev.target;
  const imageSource = clickedImage.getAttribute('src');

  createImgInfo.className = 'img_exp_text';
  createImgInfo.textContent = 'Hola'; /// añadir texto
  document.body.appendChild(createImgInfo);
  imgSlideshow.setAttribute('src', imageSource);
  overlay.classList.remove('hidden');
};

export const renderExperience = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${bodyExperienceData()}
    ${workGallery()}
    ${overlayPhoto()}
  `;
};

// // EXPERIENCE TITLE
// const bodyExperienceData = () => {
//   const containerSelector = document.querySelector('#container');
//   const h1 = document.createElement('h1');
//   h1.className = 'title_name';
//   h1.innerHTML = '.../Experiencia';
//   containerSelector.appendChild(h1);
// };

// // GALLERY EXPERIENCE IMAGES
// const workGallery = () => {
//   const containerSelector = document.querySelector('#container');
//   const sectionGallery = document.createElement('section');
//   const divGalleryColumn = document.createElement('div');
//   const rnovaImg = document.createElement('img');
//   const emergiaImg = document.createElement('img');
//   const vodafoneImg = document.createElement('img');
//   const argomImg = document.createElement('img');
//   const dxcImg = document.createElement('img');

//   sectionGallery.className = 'gallery';
//   divGalleryColumn.className = 'column';
//   rnovaImg.className = 'rnovaimg';
//   rnovaImg.src = '../../src/img/rnova-sll_li1.png';
//   rnovaImg.alt = 'rnova_logo';
//   rnovaImg.dataset.imgShow = '0';
//   emergiaImg.src = '../../src/img/emergia.jpg';
//   emergiaImg.alt = 'emergia_logo';
//   emergiaImg.dataset.imgShow = '1';
//   vodafoneImg.src = '../../src/img/vodafone.png';
//   vodafoneImg.alt = 'vodafone_logo';
//   vodafoneImg.dataset.imgShow = '2';
//   argomImg.src = '../../src/img/argom.jpeg';
//   argomImg.alt = 'argom_logo';
//   argomImg.dataset.imgShow = '3';
//   dxcImg.src = '../../src/img/dxc.png';
//   dxcImg.alt = 'dxc_logo';
//   dxcImg.dataset.imgShow = '4';

//   divGalleryColumn.appendChild(rnovaImg);
//   divGalleryColumn.appendChild(emergiaImg);
//   divGalleryColumn.appendChild(vodafoneImg);
//   divGalleryColumn.appendChild(argomImg);
//   divGalleryColumn.appendChild(dxcImg);
//   sectionGallery.appendChild(divGalleryColumn);
//   containerSelector.appendChild(sectionGallery);

//   // Evento de click para cada imagen, y cargo el evento de que hacer arriba
//   const images = document.querySelectorAll('img');
//   images.forEach((image) => {
//     image.addEventListener('click', clickImageListener);
//   });
// };

// // OVERLAY EFFECT
// const overlayPhoto = () => {
//   const createOverlay = document.createElement('div');
//   const createSlideshow = document.createElement('div');
//   const createCloseButton = document.createElement('span');
//   const prevButton = document.createElement('div');
//   const createLeftButton = document.createElement('button');
//   const nextButton = document.createElement('div');
//   const createRigthButton = document.createElement('button');
//   const imgSlideShow = document.createElement('img');

//   createOverlay.className = 'overlay hidden';
//   createSlideshow.className = 'slideshow';
//   createCloseButton.className = 'btn_close';
//   createCloseButton.textContent = 'X';
//   prevButton.className = 'button prev';
//   createLeftButton.textContent = '{';
//   nextButton.className = 'button next';
//   createRigthButton.textContent = '}';
//   imgSlideShow.src = '';
//   imgSlideShow.alt = '';
//   imgSlideShow.id = 'img_slideshow';

//   createSlideshow.appendChild(imgSlideShow);
//   nextButton.appendChild(createRigthButton);
//   createSlideshow.appendChild(nextButton);
//   prevButton.appendChild(createLeftButton);
//   createSlideshow.appendChild(prevButton);
//   createSlideshow.appendChild(createCloseButton);
//   createOverlay.appendChild(createSlideshow);
//   document.body.appendChild(createOverlay);
//   // Cerrar ventana overlay e imagen
//   const clickCloseListener = () => {
//     const overlay = document.querySelector('.overlay');
//     overlay.classList.add('hidden');
//   };
//   const closeButton = document.querySelector('.btn_close');
//   closeButton.addEventListener('click', clickCloseListener);
// };

// // Abrir imagen clicada con overlay
// const clickImageListener = (ev) => {
//   const overlay = document.querySelector('.overlay');
//   const createImgInfo = document.createElement('h2');
//   const imgSlideshow = document.querySelector('#img_slideshow');
//   const clickedImage = ev.target;
//   const imageSource = clickedImage.getAttribute('src');

//   createImgInfo.className = 'img_exp_text';
//   createImgInfo.textContent = 'Hola'; /// añadir texto
//   document.body.appendChild(createImgInfo);
//   imgSlideshow.setAttribute('src', imageSource);
//   overlay.classList.remove('hidden');
// };

// export const renderExperience = () => {
//   const bodyOfHtml = document.querySelector('#container');
//   bodyOfHtml.innerHTML = ``;
// };

// const containerSelector = document.querySelector('#container');
// const divContainer = document.createElement('div');
// containerSelector.id = 'experienceContainer';
// containerSelector.appendChild(divContainer);
// document.body.appendChild(containerSelector); --> no tengo claro si esto es necesario
// const experienceContainer = document.querySelector('#experienceContainer');
// experienceContainer.innerHTML = `<h1 class="title_name">.../Experiencia</h1>`;
