const navBar = document.querySelector('nav');

const logoDiv = document.createElement('div');
logoDiv.classList = 'logo-div';
logoDiv.textContent = 'logo';
const socialMediaActions = document.createElement('div');
socialMediaActions.classList = 'social-media-actions';
const menu = document.createElement('div');
menu.classList = 'menu';

navBar.appendChild(logoDiv);
navBar.appendChild(socialMediaActions);
navBar.appendChild(menu);