const roomsData = {
    'A': [
        'ADMINISTRATIVO', 'COORDENAÇÕES DE CURSO', 'DIRETORIAS', 'TUTORIAS 1 A 7',
        'ANATOMIA 1 E 2', 'ANATOMIA 3D', 'LABORATÓRIO DE INFORMATICA 1 A 3',
        'LABORATÓRIO DE HARDWARE', 'SALAS 401 A 416', 'SALAS 301 A 320', 'SALAS 201 A 220',
        'ATENDIMENTO AO ALUNO', 'QUERO SER ALUNO', 'AUDITÓRIO 1 E 2', 'NEGOCIAÇÃO', 'SALA DE ESTUDOS',
        'BIBLIOTECA', 'ACHADOS E PERDIDOS', 'SALÃO NOBRE'
    ],
    'B': [
        'SALAS 101 a 120', 'SALAS 201 a 220', 'SALAS 301 a 320',
        'COORDENAÇÃO BLOCO B', 'BANHEIROS B', 'SALA DOS PROFESSORES',
        'LABORATÓRIO INFORMÁTICA 1 e 2', 'ÁREA VERDE', 'CANTINA'
    ]
};

let userChoices = { entry: '', targetBlock: '', room: '' };


const videoLinks = {
    "A_para_A_ADMINISTRATIVO": "KDg90L66kZM",

};

window.onload = () => {
    
    setTimeout(() => transition('welcome-screen', 'entry-screen'), 2000);
};


function transition(hideId, showId) {
    const hide = document.getElementById(hideId);
    const show = document.getElementById(showId);

    if (!hide || !show) return;

    hide.style.opacity = '0';
    hide.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        hide.classList.add('hidden'); 
        
    
        show.classList.remove('hidden');
        show.style.opacity = '0';
        
        
        setTimeout(() => {
            show.style.transition = 'opacity 0.5s ease-in-out';
            show.style.opacity = '1';
        }, 50);
    }, 500);
}

function setEntry(block) {
    userChoices.entry = block;
    transition('entry-screen', 'target-screen');
}

function setTargetBlock(block) {
    userChoices.targetBlock = block;
    transition('target-screen', 'search-screen');
}

function filterRooms() {
    const input = document.getElementById('room-search').value.toUpperCase();
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = '';

    if (input.length < 1) return;

    const availableOptions = roomsData[userChoices.targetBlock];

    const filtered = availableOptions.filter(item => {
        
        const rangeMatch = item.match(/(\d+)\s+A\s+(\d+)/i);
        if (rangeMatch && !isNaN(input)) {
            const start = parseInt(rangeMatch[1]);
            const end = parseInt(rangeMatch[2]);
            const numInput = parseInt(input);
            if (numInput >= start && numInput <= end) return true;
        }
        return item.includes(input);
    });

    filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => selectRoom(item);
        list.appendChild(li);
    });
}

function selectRoom(item) {
    userChoices.room = item;
    document.getElementById('room-search').value = item;
    document.getElementById('autocomplete-list').innerHTML = '';
    showFinalVideo();
}

function showFinalVideo() {
   
    const logo = document.querySelector('.logo-container');
    if (logo) logo.style.display = 'none';

    transition('search-screen', 'video-screen');

    const player = document.getElementById('youtube-player');
    
   
    let routeKey = `${userChoices.entry}_para_${userChoices.targetBlock}_${userChoices.room.replace(/ /g, '_')}`;
    
    console.log("Procurando vídeo para:", routeKey);
    let videoId = videoLinks[routeKey];

    if (videoId) {
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
        console.error("Rota não mapeada:", routeKey);
     
        player.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; 
    }
}