const roomsData = {
    'A': [
        'SALAS 201 a 220', 'SALAS 301 a 320', 'SALAS 401 a 420',
        'SALAS 501 a 520', 'SALAS 601 a 620', 'SALAS 701 a 720',
        'BIBLIOTECA', 'COORDENAÇÃO BLOCO A', 'SALA DE ESTUDOS', 'BANHEIROS A',
        
        'AUDITÓRIO', 'CANTINA A', 'XEROX', 'LABORATÓRIO A1', 'SECRETARIA'
    ],
    'B': [
        'SALAS 101 a 120', 'SALAS 201 a 220', 'SALAS 301 a 320',
        'COORDENAÇÃO BLOCO B', 'BANHEIROS B', 'SALA DOS PROFESSORES',
       
        'SALA ', 'SALA ', 'SALA ', 'SALA ', 'SALA ',
        'SALA ', 'SALA ', 'SALA ', 'SALA ', 'SALA ',
        'LABORATÓRIO INFORMÁTICA 1 e 2', 'ÁREA VERDE', '?', 'CANTINA', '?'
    ]
};

let userChoices = { entry: '', targetBlock: '', room: '' };

window.onload = () => {
    setTimeout(() => transition('welcome-screen', 'entry-screen'), 2000);
};

function transition(hideId, showId) {
    const hide = document.getElementById(hideId);
    const show = document.getElementById(showId);
    hide.classList.add('fade-in'); 
    hide.style.opacity = '0';
    setTimeout(() => {
        hide.classList.add('hidden');
        show.classList.remove('hidden');
        show.classList.add('fade-in');
    }, 800);
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
        
        const rangeMatch = item.match(/(\d+)\s+a\s+(\d+)/);
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


const videoLinks = {
    "A_para_A_SALAS_201_a_220": "ID_AQUI",
    "A_para_B_SALAS_101_a_120": "ID_AQUI",
    "A_para_B_BIBLIOTECA": "ID_AQUI",
    "B_para_A_COORDENAÇÃO_BLOCO_A": "ID_AQUI",
    "B_para_B_SALAS_301_a_320": "KDg90L66kZM", 
};

function showFinalVideo() {
    
    transition('search-screen', 'video-screen');
    
    
    const player = document.getElementById('youtube-player');

    let routeKey = `${userChoices.entry}_para_${userChoices.targetBlock}_${userChoices.room.replace(/ /g, '_')}`;
    
    console.log("Procurando vídeo para a rota:", routeKey);

    
    let videoId = videoLinks[routeKey];

    if (videoId) {
        
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
       
        console.error("Vídeo não encontrado para esta rota!");
        player.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; 
    }
}
