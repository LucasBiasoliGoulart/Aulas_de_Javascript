function verificar() {
    let anos = window.document.getElementById('ano')
    let sexo = window.document.getElementsByName('sexo')[0]
    let texto = window.document.getElementById('texto')
    let img = window.document.getElementById('imagem')

    let ano = Number(anos.value)
    let idade = 2024 - ano
    let genero = ''

    if (sexo.checked) {
        genero = 'M'
    } else {
        genero = 'F'
    }

    switch(genero) {
        case 'M':
            if (idade > 124 || idade < 1) {
                texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2023)'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2023)')
                img.style.display = 'none'
            }else if (idade <= 2) {
                texto.innerText = `Você é um bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/bebê.jpg'
            }else if (idade <= 14) {
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/criança.jpg'
            }else if (idade <= 18) {
                texto.innerText = `Você é um adolecente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/adolecente.jpg'
            }else if (idade <= 65) {
                texto.innerText = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/homem.jpg'
            }else {
                texto.innerText = `Você é um senhor de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/idoso.jpeg'
            }
        break

        case 'F':
            if (idade > 124 || idade < 1) {
                texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2023)'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2023)')
                img.style.display = 'none'
            }else if (idade <= 2) {
                texto.innerText = `Você é um bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/bebêFeminino.jpg'
            }else if (idade <= 14) {
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/criançaFeminino.jpg'
            }else if (idade <= 18) {
                texto.innerText = `Você é um adolecente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/adolecenteFeminino.jpg'
            }else if (idade <= 65) {
                texto.innerText = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/mulher.jpg'
            }else {
                texto.innerText = `Você é uma senhora de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.src = './Img/idosa.jpg'
            }
        break
    }
}