function carregar() {
    let tempo = new Date
    let hora = tempo.getHours()
    let minuto = tempo.getMinutes()
    let horas = window.document.getElementById('horas')
    let img = window.document.getElementById('imagem')
    let horaio = window.document.getElementById('horaio')

    if (hora >= 0 && hora <= 5) {
        horas.innerText = `Boa madrugada, são ${hora} horas ${minuto} min!`
        img.src = './Img/madrugada.jpg'
        horaio.style.backgroundColor = 'Darkblue'
    }else if (hora < 12) {
        horas.innerText = `Bom dia, são ${hora} horas ${minuto} min!`
        img.src = './Img/manha.jpg'
        horaio.style.backgroundColor = 'Orange'
    }else if (hora < 18) {
        horas.innerText = `Boa tarde, são ${hora} horas ${minuto} min!`
        img.src = './Img/tarde.jpg'
        horaio.style.backgroundColor = 'Orangered'
    }else {
        horas.innerText = `Boa noite, são ${hora} horas ${minuto} min!`
        img.src = './Img/noite.jpg'
        horaio.style.backgroundColor = 'Blue'
    }
}