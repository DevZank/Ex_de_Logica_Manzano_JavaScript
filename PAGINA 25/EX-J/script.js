// Calcula o valor de Dolares para Reais

let quantidadeDolar           // Real
let cotacaoDolar              // Real
let valorReal                 // Real

quantidadeDolar = parseFloat(prompt("Insira a quantidade de dolares: "))
cotacaoDolar = parseFloat(prompt("Qual o valor da cotação do dolar hoje: "))

valorReal = quantidadeDolar * cotacaoDolar

alert(`O valor da transformação é R$${valorReal}`)