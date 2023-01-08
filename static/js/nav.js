const navBar = document.querySelector('nav');

const logoDiv = document.createElement('div');
logoDiv.classList = 'logo-div';

const socialMediaActions = document.createElement('div');
socialMediaActions.classList = 'social-media-actions';
socialMediaActions.textContent = 'social';

const menu = document.createElement('div');
menu.classList = 'menu';

navBar.appendChild(socialMediaActions);
navBar.appendChild(logoDiv);
navBar.appendChild(menu);