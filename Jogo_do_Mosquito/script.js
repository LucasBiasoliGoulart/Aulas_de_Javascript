// Iniciar Jogo
function iniciarJogo() {
    let nivel = document.getElementById('nivel').value;
    if (nivel === '') {
        alert('Selecione o nivel! por favor');
        return false;
    }
    window.location.href = './Pages/app.html?' + nivel;
}

// Ajustando as dimensões
let altura, largura = 0;
let vidas = 1;
let tempo = 15;

// Cronometro
let cronometro = setInterval(function () {
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(mosquito);
        window.location.href = './Pages/vitoria.html?';
    }else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
    tempo -= 1;
}, 1000);

// Nivel do jogo
let nivel = window.location.search;
nivel = nivel.replace('?', '');

let tempoMosquito = 2000;

if (nivel === 'facil') {
    tempoMosquito = 2000;
}else if (nivel === 'normal') {
    tempoMosquito = 1500;
}else if (nivel === 'dificil') {
    tempoMosquito = 1000;
}

// Ajustando o tamanho da Tela
function ajustandoTamanhoDaTela() {
    altura = window.innerWidth;
    largura = window.innerHeight;

    console.log(largura, altura);
}

ajustandoTamanhoDaTela();

function position() {
    // Remover mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
    }
    if (vidas >= 3) {
        window.location.href = './Pages/game_over.html?';
    }else {
        document.getElementById('vidas' + vidas).src = '../Img/coracao_vazio.png';
        vidas++;
    }

    // Criando as posições
    let positionX = Math.floor(Math.random() * width) -100;
    let positionY = Math.floor(Math.random() * height) -100;

    positionX = positionX < 0 ? 0 : positionX;  
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY);

    // Elemento HTML
    let mosquito = document.createElement('Img');
    mosquito.src = './Img/mosquito.png';
    mosquito.className = (tamanhoAleatorio() + '' + ladoAleatorio());
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    mosquito.onclick = function () {
        this.remove();
    };
    document.body.appendChild(mosquito);
}

position();

// Criando os elementos em tamanhoAleatorio
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
        case 3:
            return 'mosquito4';
        case 4:
            return 'mosquito5';
        case 5:
            return 'mosquito6';
        case 6:
            return 'mosquito7';
    }
}

// Criando as funções do elemento em 'ladoAleatoria'
function ladoAleatorio() {
    let lado = Math.floor(Math.random() * 2);

    switch (lado) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}