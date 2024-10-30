// Exercício 3 - Reduce

const transacoes = [
    {tipo: 'Deposito', valor: 100},
    {tipo: 'Retirada', valor: 50},
    {tipo: 'Deposito', valor: 200}
];

const totalValor = transacoes.reduce((valores, numero) => valores + numero.valor, 0)

console.log(totalValor);