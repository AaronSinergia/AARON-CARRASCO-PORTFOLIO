import '../../../style.css';
import curlyBracketsStetic from './homeComps/curlyBracketsStetic';
import homeTitle from './homeComps/homeTitle';
import personalDataOne from './homeComps/personalDataOne';
import personalDataTwo from './homeComps/personalDataTwo';

// RENDER HOME
export const renderHome = () => {
  const bodyOfHtml = document.querySelector('#container');
  bodyOfHtml.innerHTML = `
    ${homeTitle()}
    ${personalDataOne()}
    ${curlyBracketsStetic()}
    ${personalDataTwo()}
  `;
};
