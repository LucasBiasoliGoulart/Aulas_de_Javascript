let janela;

function abrirJanela() {
    janela = window.open('https://www.google.com.br/', 'nova_janela', 'width=500, height=500')
}

function fecharJanela() {
    janela.close()
}