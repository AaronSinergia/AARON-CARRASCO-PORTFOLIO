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
