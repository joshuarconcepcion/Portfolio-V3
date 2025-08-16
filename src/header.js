import headerLogo from './media/images/headerLogo.png'

export function renderHeader() {
    const header = document.querySelector('header');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    loadHeaderLogo();

    const headerPages = document.createElement('div');
    headerPages.classList.add('header-pages');

    const headerLinks = document.createElement('div');
    headerLinks.classList.add('header-links');

    header.appendChild(headerContainer);
    headerContainer.appendChild(headerPages);
    headerContainer.appendChild(headerLinks);
}

const loadHeaderLogo = () => {
    const headerLogo = document.createElement('div');
    headerContainer.classList.add('header-logo');
    headerContainer.appendChild(headerLogo);

    const logoImg = new Image();
    logoImg.src = headerLogo;
    headerLogo.appendChild(logoImg);
}