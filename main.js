import { renderNavbar } from './src/components/Home/navbar/navbar';
import { renderMail } from './src/components/footer/mailContact/mailcontact';
import { renderRRSSIcons } from './src/components/footer/rrssIcons/rrss';
import { renderFooter } from './src/components/footer/footer';

export const mainContent = () => {
  const body = document.querySelector('body');
  body.innerHTML += `
  <section id= 'section'>
    <article id="navbar"></article>
    <article id="container"></article>
    <article id="render_mail"></article>
    <article id="render_rrss_icons"></article>
    <article id="render_footer"></article>
  </section>
    `;

  renderNavbar();
  renderMail();
  renderRRSSIcons();
  renderFooter();
};

mainContent();
