const openPhotoEffect = () => {
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

export default openPhotoEffect;
