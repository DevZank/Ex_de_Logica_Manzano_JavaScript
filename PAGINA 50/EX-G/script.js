/*
  Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
  situados na faixa numérica de 1 a 10.
*/

let contadora = 0
let anterior = 0
let fatorial = 1

do {
  if (contadora % 2 != 0) {
    anterior = fatorial
    fatorial = anterior * contadora
    console.log(`${anterior} * ${contadora} = ${fatorial}`)
  }
  contadora++
} while (contadora < 11)