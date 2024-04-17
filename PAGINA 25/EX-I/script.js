// Calcula o quadrado da diferença entre dois valores

let A                         // Inteiro
let B                         // Inteiro
let diferenca                 // Inteiro
let resultado                 // Inteiro

A = parseInt(prompt("Digite o valor de A: "))
B = parseInt(prompt("Digite o valor de B: "))

if (A > B) {
    diferenca = A - B
} else {
    diferenca = B - A
}

resultado = diferenca * diferenca

alert(`O quadrado da diferença dos Valores é: ${resultado}`)