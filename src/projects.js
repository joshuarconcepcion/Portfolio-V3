export function loadProjects(container) {
    const pageRight = document.createElement('div');
    pageRight.classList.add('page-right');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectHeader = document.createElement('h1');
    projectHeader.classList.add('project-header');
    projectHeader.textContent = 'PROJECTS:';

    projectContainer.appendChild(projectHeader);
    loadProjectList(projectContainer);

    pageRight.appendChild(projectContainer);

    container.appendChild(pageRight);
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