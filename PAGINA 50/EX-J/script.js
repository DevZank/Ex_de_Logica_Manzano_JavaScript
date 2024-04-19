/*
  Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
  Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
  DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
  apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 
*/

let dividendo
let divisor
let quociente = 0

dividendo = parseFloat(prompt("Escreva um numero: "))
divisor = parseFloat(prompt("Escreva outro numero: "))

do {
  dividendo -= divisor
  quociente++
} while (dividendo > divisor)

alert (`O resultado da divisão é ${quociente}`)