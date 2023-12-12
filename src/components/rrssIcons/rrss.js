// RRSS ICONS
export const renderRRSSIcons = () => {
  const containerSelector = document.querySelector('#render_rrss_icons');
  const articleRRSS = document.createElement('article');
  const githubLink = document.createElement('a');
  const githubIMG = document.createElement('img');
  const linkedinLink = document.createElement('a');
  const linkedinIMG = document.createElement('img');
  const netlifyLink = document.createElement('a');
  const netlifyIMG = document.createElement('img');

  articleRRSS.className = 'rrss';
  githubLink.className = 'github_link';
  githubLink.href = 'https://github.com/AaronSinergia?tab=repositories';
  githubIMG.className = 'github';
  githubIMG.src = './assets/GitHubLogo.png';
  githubIMG.alt = 'github_logo';
  linkedinLink.className = 'linkedin_link';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  linkedinIMG.className = 'linkedin';
  linkedinIMG.src = './assets/1384014.png';
  linkedinIMG.alt = 'linkedin_logo';
  netlifyLink.className = 'netlify_link';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/sites';
  netlifyIMG.className = 'netlify';
  netlifyIMG.src = './assets/netlify_logo_icon_169924.png';
  netlifyIMG.alt = 'netlify_logo';

  githubLink.appendChild(githubIMG);
  articleRRSS.appendChild(githubLink);
  linkedinLink.appendChild(linkedinIMG);
  articleRRSS.appendChild(linkedinLink);
  netlifyLink.appendChild(netlifyIMG);
  articleRRSS.appendChild(netlifyLink);
  containerSelector.appendChild(articleRRSS);
};
