function Inserir() {
    let tabuada = ''
    let resultado = window.document.getElementById('resultado')
    let numero = parseInt(document.getElementById('numero').value)

    for (let contar = 1; contar <= 10; contar++) {
        tabuada += numero + ' X ' + contar + ' = ' + numero * contar + '<br>'
        resultado.innerHTML = tabuada
    }
}