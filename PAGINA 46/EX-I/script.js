/*
  Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
  somatório e a média aritmética dos valores lidos. 
*/

let numero 
let media 
let soma = 0 
let contadora = 0     

while (contadora < 10) {
  numero = parseFloat(prompt("Digite um numero (total de 10): "))
  soma += numero
  contadora++
}

media = soma / 10

alert(`O total da Soma é: ${soma}`)
alert(`O total da Média é: ${media}`)