/* 
  Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem
  informando se o número é par ou ímpar. 
*/

let numero

numero = parseInt(prompt("Digite um numero: "))

if (numero % 2 == 0) {
  alert ("O NUMERO É PAR")
} else{ 
  alert ("O NUMERO É IMPAR")
}