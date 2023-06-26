import { renderExperience } from '../pages/experience';
import { renderHome } from '../pages/home';
import { renderProjects } from '../pages/projects';

// NAVBAR
export const renderNavbar = () => {
  renderHome();
  const containerSelector = document.querySelector('#navbar');
  // Create nav elements in html
  const divNavBar = document.createElement('div');
  const navHome = document.createElement('a');
  const navExperience = document.createElement('a');
  const navProjects = document.createElement('a');

  // Asign nav classes to elements in html
  divNavBar.className = 'navbar';
  navHome.className = 'principal_links_bar is_home';
  navHome.href = '/home';
  navHome.textContent = './Página_Principal';
  navExperience.className = 'principal_links_bar is_experience';
  navExperience.href = '/experience';
  navExperience.textContent = './Experiencia';
  navProjects.className = 'principal_links_bar is_projects';
  navProjects.href = '/projects';
  navProjects.textContent = './Proyectos_en_Producción';

  // Click listener event in navbar
  const clickListener = (ev) => {
    ev.preventDefault();
    const hrefSelect = ev.target.getAttribute('href');
    if (hrefSelect === '/experience') {
      renderExperience();
    } else if (hrefSelect === '/projects') {
      renderProjects();
    } else if (hrefSelect === '/home') {
      renderHome();
    }
  };

  // Agrega el evento de clic a los enlaces de la navbar
  navHome.addEventListener('click', clickListener);
  navExperience.addEventListener('click', clickListener);
  navProjects.addEventListener('click', clickListener);

  // Elements visibles in html
  divNavBar.appendChild(navHome);
  divNavBar.appendChild(navExperience);
  divNavBar.appendChild(navProjects);
  containerSelector.appendChild(divNavBar);
};
