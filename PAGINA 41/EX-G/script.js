/* 
  Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. 
*/

let numero1
let numero2
let numero3
let numero4

numero1 = parseFloat(prompt("Digite o primeiro numero: "))
numero2 = parseFloat(prompt("Digite o segundo numero:"))
numero3 = parseFloat(prompt("Digite o terceiro numero:"))
numero4 = parseFloat(prompt("Digite o quarto numero:"))

alert (`Numeros Divisiveis por 2 e 3: `)

if (numero1 % 2 == 0 && numero1 % 3 == 0) {
  alert(numero1)
}
if (numero2 % 2 == 0 && numero2 % 3 == 0) {
  alert(numero2)
}
if (numero3 % 2 == 0 && numero3 % 3 == 0) {
  alert(numero3)
}
if (numero4 % 2 == 0 && numero4 % 3 == 0) {
  alert(numero4)
}