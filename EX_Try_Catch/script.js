let raiz = document.getElementById('numero')
let resultado = document.getElementById('resultado')

function clicar() {
    try {
        let numero = Number(numero.value)
        if (numero < 0) {
            throw new Error('Esse número é incorreto')
        }
    }catch (e) {
        console.log(e)
    }
}