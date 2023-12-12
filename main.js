import { renderNavbar } from './src/components/navbar/navbar';
import { renderMail } from './src/components/mailContact/mailcontact';
import { renderRRSSIcons } from './src/components/rrssIcons/rrss';
import { renderFooter } from './src/components/footer/footer';

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
  renderMail();
  renderRRSSIcons();
  renderFooter();
};

mainContent();
