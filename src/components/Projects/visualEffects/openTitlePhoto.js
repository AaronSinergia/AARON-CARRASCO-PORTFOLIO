const openTitlePhoto = () => {
  const imageProjectsList = document.querySelectorAll('.projects_photos');
  imageProjectsList.forEach((photo) => {
    photo.addEventListener('click', (ev) => {
      const altPhotoSelected = ev.target.id;
      const projectTitle = document.querySelectorAll('h2');
      projectTitle.forEach((title) => {
        if (title.classList == altPhotoSelected) {
          title.style.display = 'flex';
        } else {
          title.style.display = 'none';
        }
      });
    });
  });
};

export default openTitlePhoto;
