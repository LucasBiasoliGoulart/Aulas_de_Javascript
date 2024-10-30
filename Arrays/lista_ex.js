// Lista de Exercícios
// EX - 1
const tarefas = document.getElementById('tarefa');
const lista = document.getElementById('lista');
const indece = document.getElementById('indece');
const novaTarefa = document.getElementById('nova');

function adicionar() {
    if (tarefas.value === '') return;

    const novaTask = document.createElement('li');
    novaTask.textContent = tarefas.value;
    lista.appendChild(novaTask);
    lista.value = '';
}

function substituir() {
    const index = parseInt(indece.value, 10);
    const items = lista.children;

    if (index < 0 || index >= items.length) return;
    if (novaTarefa.value === '') return;

    const novaTask = document.createElement('li');
    novaTask.textContent = novaTarefa.value;
    lista.replaceChild(novaTask, items[index]);
    novaTarefa.value = '';
    indece.value = '';
}

function remover() {
    const index = parseInt(indece.value, 10);
    const items = tarefas.children;

    if (index < 0 || index >= items.length) return;

    tarefas.removeChild(items[index]);
    indece = '';
}

// EX - 2
let number = [1,2,3,4,5,6,7,8,9]
number.splice(2, 0, 14);
number.splice(4, 1);
console.log(number);

let frutas = ['Banana', 'Maçã', 'Uva', 'Laranja']
frutas.splice(2, 0, 'Manga');
frutas.splice(3, 1);
console.log(frutas);

// EX - 3
let letra = ['Hello', 'World'];
console.log(letra.reverse());

// EX - 4
let frase = ['Bom', ' 2024'];
console.log(frase.join(' dia'));

// EX - 5, 6, 7
let tabela = [1,2,3,4,5,6];
tabela.unshift(0);
tabela.pop();
tabela.shift();
console.log(tabela);

// EX - 8, 9, 10
let pessoa = {
    nome: 'Gabriel',
    idade: 34,
    trabalho: 'programador',
    apresentar: function() {
        console.log('Olá, meu nome é: ' + this.nome, 'Eu trabalho como: ' + this.trabalho)
    },
};
pessoa.apresentar();

//EX - 11
function resultado(num) {
    console.log('O resultado da operação é: ' + num)
}

function soma(a, b, callback) {
    let op = a + b;
    callback(op);
}

soma(2, 10, resultado);