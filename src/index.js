import './style.css'
import { loadChat } from './chat';
import { loadProfile } from './profile';
import { loadProjects } from './projects';

const container = document.querySelector('main');

const pageLeft = document.createElement('div');
pageLeft.classList.add('page-left');

const pageRight = document.createElement('div');
pageRight.classList.add('page-right');

loadProfile(pageLeft);
loadChat(pageLeft);
loadProjects(pageRight);

container.appendChild(pageLeft);
container.appendChild(pageRight);
