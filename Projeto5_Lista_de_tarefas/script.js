const listaTarefas = document.getElementById('lista');
const adicionarButton = document.getElementById('adicionar');
const Tarefas = document.getElementById('tarefas');

adicionarButton.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('keypress', function (e) {
    if (e.key === '') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const texto = listaTarefas.value;
    if (texto.trim() !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.innerHTML = `${texto} <button class="excluir">Excluir</button>`;
        Tarefas.appendChild(novaTarefa);
        listaTarefas.value = '';
    }
}

Tarefas.addEventListener('click', function (e) {
    if (e.target.classList.contains('excluir')) {
        e.target.parentElement.remove();
    }
});