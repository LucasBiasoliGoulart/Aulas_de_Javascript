let num = window.prompt('Digite a quantidade de dados que deseja:');
let valores = [];
let x = 0;

for(let pos = 0; pos < num; pos++) {
    x = window.prompt(`Digite o ${pos + 1}º número:`)
    valores[pos] = x;
}

window.alert(`Nosso vetor tem ${valores.length} posições.`);
window.alert(valores);