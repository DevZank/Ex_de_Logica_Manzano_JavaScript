// Calcula o quadrado da soma de 3 valores

let A               // Real
let B               // Real
let C               // Real
let quadrado        // Real

A = parseFloat(prompt("Digite o valor de A:"))
B = parseFloat(prompt("Digite o valor de B:"))
C = parseFloat(prompt("Digite o valor de C:"))

quadrado = (A + B + C) * (A + B + C)

alert(`O quadrados da soma dos três valores é: ${quadrado}`)