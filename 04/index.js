let capitalAplicado = 1000; //reais
let taxaDeJuros = 12.5; //porcentagem
const taxaDeJurosConvertida = taxaDeJuros / 100;
let periodoDeTempo = 5; //meses

let montante = capitalAplicado * (1 + taxaDeJurosConvertida) ** periodoDeTempo; //valor acumulado durante 5 meses

console.log(montante);
