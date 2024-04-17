/* 
  Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.
*/

let numero1
let numero2
let numero3
let numero4
let numero5

let menor
let maior

numero1 = parseFloat(prompt("Digite o primeiro numero: "))
numero2 = parseFloat(prompt("Digite o segundo numero:"))
numero3 = parseFloat(prompt("Digite o terceiro numero:"))
numero4 = parseFloat(prompt("Digite o quarto numero:"))
numero5 = parseFloat(prompt("Digite o quinto numero:"))

menor = numero1 
maior = numero1 

if (numero2 < menor) {
  menor = numero2
} else if (numero2 > maior) { 
  maior = numero2
}

if (numero3 < menor) {
  menor = numero3
} else if (numero3 > maior) {
  maior = numero3
}

if (numero4 < menor) {
  menor = numero4
} else if (numero4 > maior) {
  maior = numero4
}

if (numero5 < menor) {
  menor = numero5
} else if (numero5 > maior) {
  maior = numero5
}

alert (`O Maior valor foi: ${maior}`)
alert (`O Menor valor foi: ${menor}`)