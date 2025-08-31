import characterImage from './media/images/charImage.png';

export function loadProfile(container) {
    const profileContainer = document.createElement('div');
    profileContainer.classList.add('profile-container');

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = 'JOSHUA CONCEPCION';
    nameHeading.classList.add('name-heading');
    const charImage = new Image();
    charImage.src = characterImage;
    charImage.classList.add('char-img');

    profileContainer.appendChild(nameHeading);
    profileContainer.appendChild(charImage);

    container.appendChild(profileContainer);
}