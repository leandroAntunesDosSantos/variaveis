let montante = 90000; //reais
let capitalInicial = 60000; //reais
let tempo = 24; //meses

const taxaDeJuros = (montante / capitalInicial) ** (1 / tempo) - 1;
const taxaDeJurosModificada = taxaDeJuros * 100;

let mensagem = `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJurosModificada} %, pois após ${tempo} meses você teve que pagar ${montante} reais.`;

console.log(mensagem);
