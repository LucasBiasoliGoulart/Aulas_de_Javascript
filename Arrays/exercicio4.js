// Exercício 4 - Every

const alunos = [
    {nome: 'Ana', nota: 7},
    {nome: 'João', nota: 5},
    {nome: 'Maria', nota: 8}
];

console.log(alunos.every(p => p.nota > 4));