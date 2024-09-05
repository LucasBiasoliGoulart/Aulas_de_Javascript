// Exercício 7 - Pagamento
let nome = window.prompt('Nome:')
let hora = Number(window.prompt('Valor por hora:'))
let trabalho = Number(window.prompt('Hora de trabalho:'))

// Soma dos valores
let soma = hora * trabalho

document.write(`O pagamento para ${nome} deve ser ${soma}`)