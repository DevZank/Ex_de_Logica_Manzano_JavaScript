/*
  Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
  pares situados na faixa numérica de 50 a 70. 
*/

let numero
let media
let soma = 0
let contador = 50

while (contador < 71) {
  if(contador % 2 == 0) {
    soma = contador + soma
    console.log(contador)
  }
  contador++
}

media = soma / 11

alert (`O total da Soma foi: ${soma}`)
alert (`O total da Média foi: ${media}`)