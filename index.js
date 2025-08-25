let vitoriasDoJogador
let derrotasDoJogador
let resultado = calcularNivelDoJogador(65, 19)
console.log(resultado)

function calcularNivelDoJogador(vitoriasDoJogador, derrotasDoJogador){
    let saldoDeVitorias = vitoriasDoJogador - derrotasDoJogador
    let nivel 

    if(saldoDeVitorias <= 10){
        nivel = "ferro"
    } else if((saldoDeVitorias >= 11) && (saldoDeVitorias <=20)){
        nivel = "bronze"
    } else if((saldoDeVitorias >= 21) && (saldoDeVitorias <= 50)){
        nivel = "prata"
    } else if((saldoDeVitorias >= 51) && (saldoDeVitorias <= 80)){
        nivel = "ouro"
    } else if((saldoDeVitorias >= 81) && (saldoDeVitorias <= 90)){
        nivel = "diamante"
    } else if((saldoDeVitorias >= 91) && (saldoDeVitorias <= 100)){
        nivel = "lendário"
    } else if(saldoDeVitorias >= 101){
        nivel = "imortal"
    }

    return `O herói tem de saldo de ${saldoDeVitorias} e está no nível ${nivel}`
}