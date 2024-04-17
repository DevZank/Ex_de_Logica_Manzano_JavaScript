/*
  Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
  seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
  usuário. 
*/

let valorAnt
let valor
let valorMaior 
let valorMenor 
let verificacao = 1

valorAnt = -1

while (verificacao == 0) {
  valor = parseInt(prompt("Escreva um valor: "))

  if (valor < 0) {
    verificacao = 1
  }

  if (valor > valorAnt) {
    valorMaior = valor
  }

  if (valor < valorAnt) {
    valorMenor = valor
  }

  valorAnt = valor
}

alert (`O Maior valor digitado foi: ${valorMaior}`)
alert (`O Menor valor digitado foi: ${valorMenor}`)