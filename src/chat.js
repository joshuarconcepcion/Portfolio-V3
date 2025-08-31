import p1IconImg from './media/images/p1-icon.png';
import p2IconImg from './media/images/p2-icon.png';

export function loadChat(container) {
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('chat-container');
    const p1Container = document.createElement('div');
    p1Container.classList.add('p1-container');
    const p2Container = document.createElement('div');
    p2Container.classList.add('p2-container');

    chatContainer.appendChild(p1Container);
    chatContainer.appendChild(p2Container);

    const introText = document.createElement('h1');
    introText.classList.add('intro-text');
    introText.classList.add('typewriter');

    const p1Icon = new Image();
    p1Icon.src = p1IconImg;
    p1Icon.classList.add('p-icon-img');

    p1Container.appendChild(p1Icon);
    p1Container.appendChild(introText);

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

    p2Container.appendChild(replyTextContainer);
    p2Container.appendChild(p2Icon);

    container.appendChild(chatContainer);

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
        p2Container.style.display = 'flex';
        }
    }

    typeWriter();
}