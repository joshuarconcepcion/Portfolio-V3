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

    const projectHeader = document.createElement('h1');
    projectHeader.classList.add('project-header');
    projectHeader.textContent = 'PROJECTS:';

    projectContainer.appendChild(projectHeader);
    loadProjectList(projectContainer);

    landingRight.appendChild(projectContainer);

    container.appendChild(landingRight);
}

const loadProjectList = (container) => {
    const project1 = document.createElement('a');
    project1.classList.add('project-link');
    project1.textContent = `MOTION DETECTION CAMERA`;
    project1.href = 'https://twilight-skate-757.notion.site/Motion-Detection-Camera-System-1e9794250ea580759b71e1b4489a8b72';
    project1.target = '_blank';

    container.appendChild(project1);

    const project2 = document.createElement('a');
    project2.classList.add('project-link');
    project2.textContent = `UNIX LAB`;
    project2.href = 'https://twilight-skate-757.notion.site/UNIX-System-Administration-Project-1e9794250ea58049b4eeef7fc39b2a70';
    project2.target = '_blank';

    container.appendChild(project2);

    const project3 = document.createElement('a');
    project3.classList.add('project-link');
    project3.textContent = `WINDOWS FORENSIC INVESTIGATION & DATA SANITIZATION`;
    project3.href = 'https://twilight-skate-757.notion.site/Case-Report-Windows-11-Forensic-Acquisition-Recovery-and-Data-Sanitization-253794250ea580889413f34c6d77f4b9';
    project3.target = '_blank';

    container.appendChild(project3);

    const project4 = document.createElement('a');
    project4.classList.add('project-link');
    project4.textContent = `WINDOWS FORENSIC TRIAGE & RAM CAPTURE`;
    project4.href = 'https://twilight-skate-757.notion.site/Case-Report-Triage-Evidence-Collection-and-Analysis-257794250ea58047ac83c2cb2aa2e16e';
    project4.target = '_blank';

    container.appendChild(project4);

    const project5 = document.createElement('a');
    project5.classList.add('project-link');
    project5.textContent = `MOBILE DEVICE FORENSIC ACQUISITION & ARTIFACT ANALYSIS`;
    project5.href = 'https://twilight-skate-757.notion.site/iPhone-Forensic-Acquisition-Analysis-Report-25d794250ea580189727c63a25001493';
    project5.target = '_blank';

    container.appendChild(project5);

    const project6 = document.createElement('a');
    project6.classList.add('project-link');
    project6.textContent = `UNITY 3D GAME`;
    project6.href = 'https://github.com/mosawar/FPS-Zombies/tree/Final-Main';
    project6.target = '_blank';

    container.appendChild(project6);

    const project7 = document.createElement('a');
    project7.classList.add('project-link');
    project7.textContent = `INTELLIDRIVE MOCKUP`;
    project7.href = 'https://www.joshuarconcepcion.com/media/[CS250]%20Final%20Project%20Report%20-%20IntelliDrive.pdf';
    project7.target = '_blank';

    container.appendChild(project7);
}