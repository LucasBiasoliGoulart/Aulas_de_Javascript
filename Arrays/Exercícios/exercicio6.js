// Exercício 6 - Find

const pessoas = [
    {nome: 'Ana', idade: 17},
    {nome: 'João', idade: 20},
    {nome: 'Maria', idade: 19},
];

const foudNumber = pessoas.find(p => p.idade > 18)

console.log(foudNumber);