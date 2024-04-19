/*
  Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
  seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
  usuário.
*/

let total = 0
let quantidadeValores = 0
let maior = 0
let menor = 0
let valor

do {
  valor = parseFloat(prompt("Digite um valor: "))

  if (quantidadeValores == 0) {
    maior = valor
    menor = valor
  } else if (valor > maior) {
    maior = valor
  } else if (valor < menor) {
    menor = valor
  }

  if (valor >= 0) {
    total += valor
    quantidadeValores++
  }
} while (valor >= 0)

alert(`O maior valor foi: ${maior}`)
alert(`O menor valor foi: ${menor}`)