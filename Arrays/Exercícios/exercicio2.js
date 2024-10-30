// Exercício 2 - Filter

const pessoas = [
    {nome: 'Ana', idade: 17},
    {nome: 'João', idade: 20},
    {nome: 'Maria', idade: 19},
];

const arrays = pessoas.filter((num, index, elem) => elem.indexOf(num) === index)

console.log(arrays);