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
  rnovaImg.dataset.imgShow =
    'Ayudante de instalación de sistemas fotovoltáicos';
  emergiaImg.src = '../../src/img/emergia.jpg';
  emergiaImg.alt = 'emergia_logo';
  emergiaImg.dataset.imgShow =
    'Team Leader para equipo de comerciales telefónicos';
  vodafoneImg.src = '../../src/img/vodafone.png';
  vodafoneImg.alt = 'vodafone_logo';
  vodafoneImg.dataset.imgShow =
    'Gestión de BBDD, para empresa de telefonía y red de comerciales';
  argomImg.src = '../../src/img/argom.jpeg';
  argomImg.alt = 'argom_logo';
  argomImg.dataset.imgShow = 'Gestor de almacén y gestión de clientes';
  dxcImg.src = '../../src/img/dxc.png';
  dxcImg.alt = 'dxc_logo';
  dxcImg.dataset.imgShow = 'Service Desk para empresa contratadora bancaria';

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

export const renderExperience = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${bodyExperienceData()}
    ${workGallery()}
    ${overlayPhoto()}
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
