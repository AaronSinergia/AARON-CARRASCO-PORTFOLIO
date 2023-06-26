import { renderNavbar } from '../components/navbar';
// import { renderHome } from './home';
import { renderMail } from '../components/mailcontact';
import { renderRRSSIcons } from '../components/rrss';
import { renderFooter } from '../components/footer';
import { renderExperience } from './experience';

// let isHomePageRendered = false;

// Con main.js creo un archivo div dónde irá todo mi contenido/proyecto
export const mainContent = () => {
  const body = document.querySelector('body');
  body.innerHTML += `
    <div id="navbar"></div>
    <div id="container"></div>
    <div id="render_mail"></div>
    <div id="render_rrss_icons"></div>
    <div id="render_footer"></div>
    `;
  renderNavbar();
  renderExperience();

  // if (!isHomePageRendered) {
  //   renderHome();
  //   isHomePageRendered = true;
  // }
  renderMail();
  renderRRSSIcons();
  renderFooter();
};
