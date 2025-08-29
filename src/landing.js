import characterImage from './media/images/charImage.png';
import p1IconImg from './media/images/p1-icon.png';
import p2IconImg from './media/images/p2-icon.png';

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
    const landingLeftP1Container = document.createElement('div');
    landingLeftP1Container.classList.add('p1-container');
    const landingLeftP2Container = document.createElement('div');
    landingLeftP2Container.classList.add('p2-container');

    landingLeftTextContainer.appendChild(landingLeftP1Container);
    landingLeftTextContainer.appendChild(landingLeftP2Container);

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

    const p1Icon = new Image();
    p1Icon.src = p1IconImg;
    p1Icon.classList.add('p-icon-img');

    landingLeftP1Container.appendChild(p1Icon);
    landingLeftP1Container.appendChild(introText);

    const replyTextContainer = document.createElement('div');
    replyTextContainer.classList.add('reply-text-container');
    const replyLink1 = document.createElement('a');
    replyLink1.classList.add('reply-link');
    replyLink1.textContent = `"LinkedIn"`;
    replyLink1.href = 'https://www.linkedin.com/in/joshuareyesconcepcion/';
    replyLink1.target = '_blank';
    const replyLink2 = document.createElement('a');
    replyLink2.classList.add('reply-link');
    replyLink2.textContent = `"GitHub"`;
    replyLink2.href = 'https://github.com/joshuarconcepcion';
    replyLink2.target = '_blank';

    replyTextContainer.appendChild(replyLink1);
    replyTextContainer.appendChild(replyLink2);

    const p2Icon = new Image();
    p2Icon.src = p2IconImg;
    p2Icon.classList.add('p-icon-img')

    landingLeftP2Container.appendChild(replyTextContainer);
    landingLeftP2Container.appendChild(p2Icon);

    landingLeft.appendChild(landingLeftMediaContainer);
    landingLeft.appendChild(landingLeftTextContainer);

    container.appendChild(landingLeft);

    const text = `"Hey, I'm Joshua, a computer science graduate 
    currently exploring web development, cybersecurity,
     and digital forensics. What can I do for you?"`;
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter,20);
        } else {
        landingLeftP2Container.style.display = 'flex';
        }
    }

    typeWriter();
}

const loadLandingRight = () => {
    const landingRight = document.createElement('div');
    landingRight.classList.add('landing-right');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    landingRight.appendChild(projectContainer);

    container.appendChild(landingRight);
}

