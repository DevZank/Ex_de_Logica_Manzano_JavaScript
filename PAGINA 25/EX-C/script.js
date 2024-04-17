// Calcula o volume de uma lata

let raio           // Real
let altura         // Real
let volume         // Real

raio = parseFloat(prompt("Escreva o raio da lata: "))
altura = parseFloat(prompt("Escreva a altura da lata: "))

volume = 3.14 * raio ^ 2 * altura

alert(`O volume da lata é: ${volume}`)