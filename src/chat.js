import p1IconImg from './media/images/p1-icon.png';
import p2IconImg from './media/images/p2-icon.png';

export function loadChat(container) {
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('chat-container');

    loadIntroText(chatContainer, () => loadReplyText(chatContainer));

    container.appendChild(chatContainer);
}

const loadIntroText = (container, onComplete) => {
    const p1Container = document.createElement('div');
    p1Container.classList.add('p1-container');

    const introText = document.createElement('h1');
    introText.classList.add('typewriter');

    const p1Icon = new Image();
    p1Icon.src = p1IconImg;
    p1Icon.classList.add('p-icon-img');

    p1Container.appendChild(p1Icon);
    p1Container.appendChild(introText);

    container.appendChild(p1Container);

    const text = `"Hey, I'm Joshua, a computer science graduate 
    from San Diego currently exploring web development, cybersecurity,
     and digital forensics. What can I do for you?"`;
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter,10);
        } else {
            if (onComplete) onComplete();
        }
    }

    typeWriter();
}

const loadReplyText = (container) => {
    const p2Container = document.createElement('div');
    p2Container.classList.add('p2-container');

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

    const replyBtn = document.createElement('button');
    replyBtn.classList.add('reply-btn');
    replyBtn.textContent = '"Tell me about yourself"';
    replyBtn.addEventListener('click', () => {
        loadLearnMoreReply(container, () => 
            loadCurrentWorkReply(container, () => 
                loadFunFactReply(container)));
        container.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    })

    replyTextContainer.appendChild(replyLink1);
    replyTextContainer.appendChild(replyLink2);
    replyTextContainer.appendChild(replyBtn);

    const p2Icon = new Image();
    p2Icon.src = p2IconImg;
    p2Icon.classList.add('p-icon-img')

    p2Container.appendChild(replyTextContainer);
    p2Container.appendChild(p2Icon);

    container.appendChild(p2Container);

    p2Container.style.display = 'flex';
}

const loadLearnMoreReply = (container, onComplete) => {
    const p3Container = document.createElement('div');
    p3Container.classList.add('p3-container'); 

    const learnMoreText = document.createElement('h1');
    learnMoreText.classList.add('typewriter');

    const p1Icon = new Image();
    p1Icon.src = p1IconImg;
    p1Icon.classList.add('p-icon-img');

    p3Container.appendChild(p1Icon);
    p3Container.appendChild(learnMoreText);

    container.appendChild(p3Container);

    const text = `"When I'm not coding, you can usually find me 
    cafe hopping, exploring the city with my cat, 
    or rewatching old cowboy movies. This space is a growing archive 
    of the projects I’ve built and the ideas I’m exploring 
    in development."`;
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            learnMoreText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter,10);
        } else {
            if (onComplete) onComplete();
        }
    }

    typeWriter();
}

const loadCurrentWorkReply = (container, onComplete) => {
    const p4Container = document.createElement('div');
    p4Container.classList.add('p4-container'); 

    const currentWorkText = document.createElement('h1');
    currentWorkText.classList.add('typewriter');

    const p1Icon = new Image();
    p1Icon.src = p1IconImg;
    p1Icon.classList.add('p-icon-img');

    p4Container.appendChild(p1Icon);
    p4Container.appendChild(currentWorkText);

    container.appendChild(p4Container);

    const text = `"I’m currently building projects in frontend
     web development while deepening my skills in cybersecurity 
     and digital forensics. It’s a mix of creative coding and 
     technical problem solving.”`;
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            currentWorkText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter,10);
        } else {
            if (onComplete) onComplete();
        }
    }

    typeWriter();
}

const loadFunFactReply = (container) => {
    const p5Container = document.createElement('div');
    p5Container.classList.add('p5-container'); 

    const funFactText = document.createElement('h1');
    funFactText.classList.add('typewriter');

    const p1Icon = new Image();
    p1Icon.src = p1IconImg;
    p1Icon.classList.add('p-icon-img');

    p5Container.appendChild(p1Icon);
    p5Container.appendChild(funFactText);

    container.appendChild(p5Container);

    const text = `"Fun fact: I’ve flown to Taiwan multiple times 
    and plan to move there eventually!
    I’m learning Chinese to make the transition smoother.”`;
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            funFactText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter,10);
        }
    }

    typeWriter();
}