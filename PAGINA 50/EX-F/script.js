/*
  Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
  total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
  dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
  parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
  como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
  média. 
*/

let total = 0
let valor
let quantidadeValores = 0

do {
  valor = parseFloat(prompt("Insira um valor: "))

  if (valor >= 0) {
    total += valor
    quantidadeValores++
  }
} while (valor >= 0)

if (quantidadeValores > 0) {
  console.log(`Somatório: ${total}`)
  console.log(`Média: ${total / quantidadeValores}`)
  console.log(`Total de valores lidos: ${quantidadeValores}`)
} else {
  console.log("Nenhum valor foi Lido!")
}