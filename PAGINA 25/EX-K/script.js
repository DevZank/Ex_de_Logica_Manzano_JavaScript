// Converte Reais em Dolares

let quantidadeReal           // Real
let cotacaoDolar             // Real
let valorDolar               // Real

quantidadeReal = parseFloat(prompt("Insira a quantidade de reais que você tem: "))
cotacaoDolar = parseFloat(prompt("Qual o valor da cotação do dolar hoje: "))

valorDolar = quantidadeReal / cotacaoDolar

alert(`O valor da transformação é U$${valorDolar}`)