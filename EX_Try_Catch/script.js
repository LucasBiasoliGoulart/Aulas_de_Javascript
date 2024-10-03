let num = document.getElementById('numero')
let resultado = document.getElementById('resultado')

function clicar() {
    try {
        let numero = Number(num.value)
        if (numero < 0) {
            throw new Error('Esse número é incorreto')
        }
        let raiz = Math.sqrt(numero)
        resultado.innerHTML = `${raiz}`
    }catch (e) {
        window.alert(e)
    }finally {
        console.log('finally')
    }
}