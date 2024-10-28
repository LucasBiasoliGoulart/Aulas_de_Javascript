// Função de Array 

// Exercício 1 - Map
const produtos = [
    {nome: 'Camiseta', preco: 29.99},
    {nome: 'Calça', preco: 49.99},
    {nome: 'Tênis', preco: 89.99}
];

const celsius = produtos.map(function() {
    return Math.round(produtos)
})

console.log(celsius);