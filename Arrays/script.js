// Callbacks
function exibir(num) {
    console.log('A operação resultou em: ' + num);
}

function soma(a, b, callbacks) {
    let op = a + b;
    callbacks(op);
}

function multiplocacao(a, b, cb) {
    let op = a * b;
    cb(op);
}

soma(2, 2, exibir);
multiplocacao(2, 4, exibir);

// Dicas - Console.table()
const pessoa = [
    {nome: 'João', idade: 25},
    {nome: 'Luiz', idade: 20},
    {nome: 'Maria', idade: 18},
    {nome: 'Alice', idade: 22},
    {nome: 'Gustavo', idade: 30}
];

console.table(pessoa);

// Console.group()
console.group('Grupo 1');
console.log('Mensagem 1');
console.log('Mensagem 2');
console.groupEnd();

//Pop, Unshift, Shift
let num = [1,2,3,4,5,6];
num.unshift(0);
num.shift();
num.pop();

console.log(num)