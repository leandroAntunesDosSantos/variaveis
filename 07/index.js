let popInicialInfect = 1000; //populaçao inicial

let PacInfectTransmit = 4; //quantidade de pessoas que foram tranmitidas a doença

let tempoPercorrido = 7; //dias

const totalPessoasInfectadas =
  popInicialInfect * PacInfectTransmit ** (tempoPercorrido / 7); //numero de pessoas infectadas

console.log(totalPessoasInfectadas);
