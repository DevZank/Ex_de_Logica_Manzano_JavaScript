/* 
  Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
*/

let numero1
let numero2
let diferenca

numero1 = parseInt(prompt("Digite um numero inteiro: "))
numero2 = parseInt(prompt("Digite outro numero inteiro: "))

if (numero1 <= 0 || numero2 <= 0) {
  alert (`Valores Invalidos`)
} else if (numero1 > numero2) {
  diferenca = numero1 - numero2
  alert(`O maior numero digitado é ${numero1} o menor numero digitado ${numero2}`)
  alert(`A diferenca entre eles da: ${diferenca}`)
} else {
  diferenca = numero2 - numero1
  alert(`O maior numero digitado é ${numero2} o menor numero digitado ${numero1}`)
  alert(`A diferenca entre eles da: ${diferenca}`)
}