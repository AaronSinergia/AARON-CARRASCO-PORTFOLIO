// EMAIL
export const renderMail = () => {
  const containerSelector = document.querySelector('#render_mail');
  const h3Mail = document.createElement('h3');
  const linkMail = document.createElement('a');

  h3Mail.className = 'mail_contact';
  linkMail.className = 'mail_link';
  linkMail.href = 'mailto:a.carrasco9@me.com';
  linkMail.textContent = 'Abierto a nuevos proyectos';

  h3Mail.appendChild(linkMail);
  containerSelector.appendChild(h3Mail);
};
