import './style.css';
import curlyBracketsStetic from './homeComps/curlyBracketsStetic';
import personalDataOne from './homeComps/personalDataOne';
import personalDataTwo from './homeComps/personalDataTwo';
import divLogosProgrammer from './homeComps/divLogosProgrammer';

// RENDER HOME
export const renderHome = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${personalDataOne()}
    ${curlyBracketsStetic()}
    ${personalDataTwo()}
    ${divLogosProgrammer()}
  `;
};
