import characterImage from './media/images/charImage.png'

const container = document.querySelector('main');

export function loadLandingPage() {
    container.innerHTML = '';

    loadLandingLeft();
    loadLandingRight();
}

const loadLandingLeft = () => {
    const landingLeft = document.createElement('div');
    landingLeft.classList.add('landing-left');

    const landingLeftMediaContainer = document.createElement('div');
    landingLeftMediaContainer.classList.add('landing-left-media-container');
    const landingLeftTextContainer = document.createElement('div');
    landingLeftTextContainer.classList.add('landing-left-text-container');

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = 'JOSHUA CONCEPCION';
    nameHeading.classList.add('name-heading');
    const charImage = new Image();
    charImage.src = characterImage;
    charImage.classList.add('char-img');

    landingLeftMediaContainer.appendChild(nameHeading);
    landingLeftMediaContainer.appendChild(charImage);

    const introText = document.createElement('h1');
    introText.classList.add('intro-text');
    introText.classList.add('typewriter');

    landingLeftTextContainer.appendChild(introText);

    landingLeft.appendChild(landingLeftMediaContainer);
    landingLeft.appendChild(landingLeftTextContainer);

    container.appendChild(landingLeft);

    const text = `'Hello, I'm Joshua, a computer science graduate passionate about cybersecurity and digital forensics
    with a background in web development.'`;
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter,30);
        }
    }

    typeWriter();
}

const loadLandingRight = () => {
    const landingRight = document.createElement('div');
    landingRight.classList.add('landing-right');

    container.appendChild(landingRight);
}

