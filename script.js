// Eventos Javascript - Funções
// Area
let a = window.document.getElementById('area')
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', sair)

function entrou(){
    a.innerText = 'Entrou!'
    a.style.background = 'aqua'
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'springgreen'
}

// Segunda Area
let b = window.document.getElementById('area2')
b.addEventListener('mouseenter', entro)
b.addEventListener('mouseout', sai)

function entro(){
    b.innerText = 'Bem vindo!'
    b.style.background = 'aqua'
}

function sai(){
    b.innerText = 'Tchau!'
    b.style.background = 'springgreen'
}

// Terceira Area
let c = window.document.getElementById('area3')
c.addEventListener('mouseenter', entrando)
c.addEventListener('mouseout', saindo)

function entrando(){
    c.innerText = 'Boas vindas!'
    c.style.background = 'aqua'
}

function saindo(){
    c.innerText = 'Adeus'
    c.style.background = 'springgreen'
}

// Quarta Area
let d = window.document.getElementById('area4')
d.addEventListener('mouseenter', entrada)
d.addEventListener('mouseout', saida)

function entrada(){
    d.innerText = 'Olá!'
    d.style.background = 'aqua'
}

function saida(){
    d.innerText = 'Até mais'
    d.style.background = 'SpringGreen'
}