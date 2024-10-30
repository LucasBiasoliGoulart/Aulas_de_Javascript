// Exercício 5 - Soma

const produtos = [
    {nome: 'Camiseta', preco: 29.99},
    {nome: 'Calça', preco: 49.99},
    {nome: 'Tênis', preco: 120.00}
]

function Soma(value) {
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            return false
        }
    }

    return value > 1
}

console.log( produtos.some(Soma) );