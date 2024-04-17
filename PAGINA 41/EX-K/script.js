/* 
  Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua
  apresentação, caso o valor não seja maior que três.
*/

let numero

numero = parseInt(prompt("Digite um numero: "))

if (numero <= 3) {
  alert (`Apresentando o Numero ${numero}`)
} 