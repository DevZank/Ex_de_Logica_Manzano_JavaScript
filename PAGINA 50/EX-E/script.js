/*
  Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
  total do somatório da fatorial de cada valor lido. 
*/

let numeroBase = 0
let numeroDoFatorial
let totalDoFatorial 
let somaDosFatoriais = 0

do {
  numeroDoFatorial = parseFloat(prompt("Escreva um número: "))

  totalDoFatorial = 1

  do {
    totalDoFatorial *= numeroDoFatorial
    numeroDoFatorial--
  } while (numeroDoFatorial >= 1)

  console.log(`Total do Fatorial: ${totalDoFatorial}`)

  somaDosFatoriais += totalDoFatorial

  numeroBase++
} while (numeroBase < 16)

console.log(`Total de todos Fatoriais é: ${somaDosFatoriais}`)