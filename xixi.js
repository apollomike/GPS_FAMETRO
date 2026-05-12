const roomsData = {
    'A': [
        'ADMINISTRATIVO, COORD. DE CURSOS E DIRETORIAS', 'COORDENAÇÕES DE CURSO', 'DIRETORIAS', 'ESPAÇO DA MEDICINA',
        'ANATOMIA 1 E 2', 'ANATOMIA 3D', 'LABORATÓRIO DE INFORMATICA 1 A 3',
        'LABORATÓRIO DE HARDWARE', 'SALAS 401 A 416', 'SALAS 301 A 320', 'SALAS 201 A 220',
        'ATENDIMENTO AO ALUNO', 'QUERO SER ALUNO', 'AUDITÓRIO 1 E 2', 'NEGOCIAÇÃO', 'SALA DE ESTUDOS',
        'BIBLIOTECA', 'ACHADOS E PERDIDOS', 'SALÃO NOBRE'
    ],
    'B': [
        'LABORATÓRIO DE REDE DE COMPUTADORES E HARDWARE','LABORATÓRIO DE INFORMATICA 1 E 2',
        'LABORATÓRIO MULTIDISCIPLINAR', 'LABORATÓRIO DE ANÁLISE CLINICA',
        'ÁREA DE ARQUITETURA (ATELIÊ, LAB. DE CIÊNCIA DOS MATERIAIS E LAB. DE DESENHO TECNICO)', 
        'LABORATÓRIO DE FÍSICA', 'LABORATÓRIO DE INFORMATICA 3',
        ,'SALAS 105 A 111', 'SALAS 221 A 225', 'LABORATÓRIO DE DESIGN, PROCESSOS E PROTOTIPAÇÃO',
        'ÁREA VERDE'
    ]
};

let userChoices = { entry: '', targetBlock: '', room: '' };


const videoLinks = {
    "A_PARA_A_ADMINISTRATIVO,_COORD._DE_CURSOS_E_DIRETORIAS": "xCnHHvdp4rc",
    "B_PARA_A_ADMINISTRATIVO,_COORD._DE_CURSOS_E_DIRETORIAS": "RzBgqj2jY0c",
    "A_PARA_A_ESPAÇO_DA_MEDICINA": "F8aPrX8H5EI",
    "B_PARA_A_ESPAÇO_DA_MEDICINA": "a6FgY0MpnCE",
    "A_PARA_A_ANATOMIA_1_E_2": "yKZ2dJHHJgA",   
    "B_PARA_A_ANATOMIA_1_E_2": "kieIapkxvEI",
    "A_PARA_A_ANATOMIA_3D": "vdrrauueDH0",
    "B_PARA_A_ANATOMIA_3D": "5i5qeh9CvSM",
    "A_PARA_A_LABORATÓRIO_DE_INFORMATICA_1_A_3": "D0m2sDL3xEk",
    "B_PARA_A_LABORATÓRIO_DE_INFORMATICA_1_A_3": "IduJA-Fs-g0",
    "A_PARA_A_LABORATÓRIO_DE_HARDWARE": "LcoQKR4Ullc",     
    "B_PARA_A_LABORATÓRIO_DE_HARDWARE": "5HJq6lomwRU",
    "A_PARA_A_SALAS_401_A_416": "eEAFZ9zu3xY",
    "B_PARA_A_SALAS_401_A_416": "_fgmP6z1y4c",
    "A_PARA_A_SALAS_301_A_320": "-o639dNR2jw",
    "B_PARA_A_SALAS_301_A_320": "oORKdDcDjv8",
    "A_PARA_A_SALAS_201_A_220": "U9idoYVtaUo",
    "B_PARA_A_SALAS_201_A_220": "ezftUeogvKk",
    "A_PARA_A_ATENDIMENTO_AO_ALUNO": "rfeuF_emJvM",
    "B_PARA_A_ATENDIMENTO_AO_ALUNO": "WN-3uQdI7T4",
    "A_PARA_A_QUERO_SER_ALUNO": "aFuGFNwWn_M",
    "B_PARA_A_QUERO_SER_ALUNO": "IZRMpQmdHmM",
    "A_PARA_A_AUDITÓRIO_1_E_2": "wKK89_8HJcE",
    "B_PARA_A_AUDITÓRIO_1_E_2": "i8yIxxfr2rM",
    "A_PARA_A_NEGOCIAÇÃO": "szx1PHKM9Eo",
    "B_PARA_A_NEGOCIAÇÃO": "ErnxgGN0tUc",
    "A_PARA_A_SALA_DE_ESTUDOS": "eRXL5G5QwHw",
    "B_PARA_A_SALA_DE_ESTUDOS": "xxu6Y9asxgE",
    "A_PARA_A_BIBLIOTECA": "UzmdZgoUGnw",
    "B_PARA_A_BIBLIOTECA": "7CUzDpb4G_0",
    "A_PARA_A_ACHADOS_E_PERDIDOS": "-EWAZE5gNm0",
    "B_PARA_A_ACHADOS_E_PERDIDOS": "Ve5AmDES3cI",
    "A_PARA_A_SALÃO_NOBRE": "lfLZCB6ipz0",
    "B_PARA_A_SALÃO_NOBRE": "PgMHtodb3rc",   
    "A_PARA_B_LABORATÓRIO_DE_REDE_DE_COMPUTADORES_E_HARDWARE": "UIWjzY8ggsU",
    "B_PARA_B_LABORATÓRIO_DE_REDE_DE_COMPUTADORES_E_HARDWARE": "flBNOGfvnmo",
    "A_PARA_B_LABORATÓRIO_DE_INFORMATICA_1_E_2": "Q9ktoierstw",
    "B_PARA_B_LABORATÓRIO_DE_INFORMATICA_1_E_2": "5Dl72pZND_g",
    "A_PARA_B_LABORATÓRIO_MULTIDISCIPLINAR": "CHz9r-AX9yA",
    "B_PARA_B_LABORATÓRIO_MULTIDISCIPLINAR": "lvmTjiILqNY",
    "A_PARA_B_LABORATÓRIO_DE_ANÁLISE_CLINICA": "j5rsjp1t56o",
    "B_PARA_B_LABORATÓRIO_DE_ANÁLISE_CLINICA": "vcKZ1j30Tas",
    "A_PARA_B_ÁREA_DE_ARQUITETURA_(ATELIÊ,_LAB._DE_CIÊNCIA_DOS_MATERIAIS_E_LAB._DE_DESENHO_TECNICO)": "Eiy3k4JY94E",
    "B_PARA_B_ÁREA_DE_ARQUITETURA_(ATELIÊ,_LAB._DE_CIÊNCIA_DOS_MATERIAIS_E_LAB._DE_DESENHO_TECNICO)": "aDc0GUPq6nI",
    "A_PARA_B_LABORATÓRIO_DE_FÍSICA": "L4el1tix5P8",
    "B_PARA_B_LABORATÓRIO_DE_FÍSICA": "Z_LgCmqQ5nw",
    "A_PARA_B_LABORATÓRIO_DE_INFORMATICA_3": "omYZgEEooCY",
    "B_PARA_B_LABORATÓRIO_DE_INFORMATICA_3": "zHplFGuXyts",
    "A_PARA_B_SALAS_105_A_111": "4Rzah8NNuYw",
    "B_PARA_B_SALAS_105_A_111": "TF8XbPnv9qk",
    "A_PARA_B_SALAS_221_A_225": "H15OHSSOZtk",
    "B_PARA_B_SALAS_221_A_225": "6IgGxfYdsqQ",
    "A_PARA_B_LABORATÓRIO_DE_DESIGN,_PROCESSOS_E_PROTOTIPAÇÃO": "P8Ze5QKtsfU",
    "B_PARA_B_LABORATÓRIO_DE_DESIGN,_PROCESSOS_E_PROTOTIPAÇÃO": "jMkefM-xLMk",
    "A_PARA_B_ÁREA_VERDE": "EfBmUTRJ2hU",
    "B_PARA_B_ÁREA_VERDE": "n9dDyb6V16U",
    
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

    
    return item.split(' ').some(palavra => 
        palavra.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
               .startsWith(input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    );
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
