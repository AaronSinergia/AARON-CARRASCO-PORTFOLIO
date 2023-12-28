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

export default overlayPhoto;
