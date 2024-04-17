// Inverte os valores das Variaveis

let A                  // Caracter
let B                  // Caracter
let ponte              // Caracter

A = prompt("Escreva o valor de A: ")
B = prompt("Escreva o valor de B: ")

ponte = A
A = B
B = ponte

alert(`O valor de A, agora é ${A}`)
alert(`O valor de B, agora é ${B}`)