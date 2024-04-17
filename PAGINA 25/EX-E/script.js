// Calcula o juros das Prestções

let valor                    // Real
let _tempo                   // Inteiro
let taxa                     // Real
let total                    // Real

valor = parseFloat(prompt("Qual o valor das prestações? "))
_tempo = parseInt(prompt("Qual a quantidade de dias atrasados? "))
taxa = parseFloat(prompt("Qual a taxa de juros? "))

total = valor + valor * taxa / 100 * _tempo

alert(`O valor final da prestação é ${total}`)