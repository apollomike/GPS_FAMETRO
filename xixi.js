const roomsData = {
    'A': [
        'ADMINISTRATIVO', 'COORDENAÇÕES DE CURSO', 'DIRETORIAS', 'ESPAÇO DA MEDICINA',
        'ANATOMIA 1 E 2', 'ANATOMIA 3D', 'LABORATÓRIO DE INFORMATICA 1 A 3',
        'LABORATÓRIO DE HARDWARE', 'SALAS 401 A 416', 'SALAS 301 A 320', 'SALAS 201 A 220',
        'ATENDIMENTO AO ALUNO', 'QUERO SER ALUNO', 'AUDITÓRIO 1 E 2', 'NEGOCIAÇÃO', 'SALA DE ESTUDOS',
        'BIBLIOTECA', 'ACHADOS E PERDIDOS', 'SALÃO NOBRE'
    ],
    'B': [
        'LABORATÓRIO DE REDE DE COMPUTADORES E HARDWARE','LABORATÓRIO DE INFORMATICA 1 E 2',
        'LABORATÓRIO DE MULTIMIDIA', 'LABORATÓRIO DE ANÁLISE CLINICA',
        'ÁREA DE ARQUITETURA (ATELIÊ, LAB. DE CIÊNCIA DOS MATERIAIS E LAB. DE DESENHO TECNICO)', 
        'LABORATÓRIO DE FÍSICA', 'LABORATÓRIO DE HIDRÁULICA', 'LABORATÓRIO DE INFORMATICA 3',
        'ATELIÊ DE PROJETOS URBANOS E DESENVOLVIMENTO DE PRODUTOS', 'SALAS 105 A 111', 'SALAS 221 A 225'
    ]
};

let userChoices = { entry: '', targetBlock: '', room: '' };


const videoLinks = {
    "A_PARA_A_ADMINISTRATIVO": "KDg90L66kZM",       
    "B_PARA_A_ADMINISTRATIVO": "4XKGfziuw5c",
    "A_PARA_A_COORDENAÇÕES_DE_CURSO": "",
    "B_PARA_A_COORDENAÇÕES_DE_CURSO": "",
    "A_PARA_A_DIRETORIAS": "",
    "B_PARA_A_DIRETORIAS": "",
    "A_PARA_A_ESPAÇO_DA_MEDICINA": "",
    "B_PARA_A_ESPAÇO_DA_MEDICINA": "",
    "A_PARA_A_ANATOMIA_1_E_2": "",   
    "B_PARA_A_ANATOMIA_1_E_2": "",
    "A_PARA_A_ANATOMIA_3D": "",
    "B_PARA_A_ANATOMIA_3D": "",
    "A_PARA_A_LABORATÓRIO_DE_INFORMATICA_1_A_3": "",
    "B_PARA_A_LABORATÓRIO_DE_INFORMATICA_1_A_3": "",
    "A_PARA_A_LABORATÓRIO_DE_HARDWARE": "",     
    "B_PARA_A_LABORATÓRIO_DE_HARDWARE": "",
    "A_PARA_A_SALAS_401_A_416": "",
    "B_PARA_A_SALAS_401_A_416": "",
    "A_PARA_A_SALAS_301_A_320": "",
    "B_PARA_A_SALAS_301_A_320": "",
    "A_PARA_A_SALAS_201_A_220": "",
    "B_PARA_A_SALAS_201_A_220": "",
    "A_PARA_A_ATENDIMENTO_AO_ALUNO": "",
    "B_PARA_A_ATENDIMENTO_AO_ALUNO": "",
    "A_PARA_A_QUERO_SER_ALUNO": "",
    "B_PARA_A_QUERO_SER_ALUNO": "",
    "A_PARA_A_AUDITÓRIO_1_E_2": "",
    "B_PARA_A_AUDITÓRIO_1_E_2": "",
    "A_PARA_A_NEGOCIAÇÃO": "",
    "B_PARA_A_NEGOCIAÇÃO": "",
    "A_PARA_A_SALA_DE_ESTUDOS": "",
    "B_PARA_A_SALA_DE_ESTUDOS": "28sL5hjty8o",
    "A_PARA_A_BIBLIOTECA": "",
    "B_PARA_A_BIBLIOTECA": "",
    "A_PARA_A_ACHADOS_E_PERDIDOS": "",
    "B_PARA_A_ACHADOS_E_PERDIDOS": "",
    "A_PARA_A_SALÃO_NOBRE": "",
    "B_PARA_A_SALÃO_NOBRE": "",   
    "A_PARA_B_LABORATÓRIO_DE_REDE_DE_COMPUTADORES_E_HARDWARE": "",
    "B_PARA_B_LABORATÓRIO_DE_REDE_DE_COMPUTADORES_E_HARDWARE": "",
    "A_PARA_B_LABORATÓRIO_DE_INFORMATICA_1_E_2": "",
    "B_PARA_B_LABORATÓRIO_DE_INFORMATICA_1_E_2": "",
    "A_PARA_B_LABORATÓRIO_DE_MULTIMIDIA": "",
    "B_PARA_B_LABORATÓRIO_DE_MULTIMIDIA": "",
    "A_PARA_B_LABORATÓRIO_DE_ANÁLISE_CLINICA": "",
    "B_PARA_B_LABORATÓRIO_DE_ANÁLISE_CLINICA": "",
    "A_PARA_B_ÁREA_DE_ARQUITETURA_(ATELIÊ,_LAB._DE_CIÊNCIA_DOS_MATERIAIS_E_LAB._DE_DESENHO_TECNICO)": "",
    "B_PARA_B_ÁREA_DE_ARQUITETURA_(ATELIÊ,_LAB._DE_CIÊNCIA_DOS_MATERIAIS_E_LAB._DE_DESENHO_TECNICO)": "",
    "A_PARA_B_LABORATÓRIO_DE_FÍSICA": "",
    "B_PARA_B_LABORATÓRIO_DE_FÍSICA": "",
    "A_PARA_B_LABORATÓRIO_DE_HIDRÁULICA": "",
    "B_PARA_B_LABORATÓRIO_DE_HIDRÁULICA": "",
    "A_PARA_B_LABORATÓRIO_DE_INFORMATICA_3": "",
    "B_PARA_B_LABORATÓRIO_DE_INFORMATICA_3": "",
    "A_PARA_B_ATELIÊ_DE_PROJETOS_URBANOS_E_DESENVOLVIMENTO_DE_PRODUTOS": "",
    "B_PARA_B_ATELIÊ_DE_PROJETOS_URBANOS_E_DESENVOLVIMENTO_DE_PRODUTOS": "",
    "A_PARA_B_SALAS_105_A_111": "",
    "B_PARA_B_SALAS_105_A_111": "",
    "A_PARA_B_SALAS_221_A_225": "",
    "B_PARA_B_SALAS_221_A_225": ""

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
       return item.toUpperCase().startsWith(input.toUpperCase());
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

    let roomClean = userChoices.room.trim().toUpperCase().replace(/\s+/g, '_');
    
    let entryClean = userChoices.entry.toUpperCase();
    let targetClean = userChoices.targetBlock.toUpperCase();

    let routeKey = `${entryClean}_PARA_${targetClean}_${roomClean}`;
    
    console.log("Chave gerada pelo sistema:", routeKey);

    let videoId = videoLinks[routeKey];

    if (videoId) {
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
        console.error("Verifique seu objeto videoLinks! Não existe a chave:", routeKey);
        player.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; 
    }
}