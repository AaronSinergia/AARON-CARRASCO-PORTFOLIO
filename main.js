import { renderNavbar } from './src/components/navbar/navbar';
import { renderMail } from './src/components/footer/mailContact/mailcontact';
import { renderRRSSIcons } from './src/components/footer/rrssIcons/rrss';
import { renderFooter } from './src/components/footer/footer';
import { renderHome } from './src/components/Home/home';
import { renderHeader } from './src/components/header/header';

export const mainContent = () => {
  const body = document.querySelector('body');
  body.innerHTML += `
  <section id= 'section'>
  <article id="header"></article>
    <article id="navbar"></article>
    <article id="container"></article>
    <article id="render_mail"></article>
    <article id="render_rrss_icons"></article>
    <article id="render_footer"></article>
  </section>
    `;

  renderHeader();
  renderHome();
  renderNavbar();
  renderMail();
  renderRRSSIcons();
  renderFooter();
};

mainContent();
