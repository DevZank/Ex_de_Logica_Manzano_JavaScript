/*
  Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
  banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
  nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
  do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
  calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
  total acumulado da área residencial.
*/

let comodo
let opcao

let largura
let comprimento
let total
let soma = 0

comodo = prompt("Digite o nome do comodo: ")
largura = parseInt(prompt("Digite o valor da largura: "))
comprimento = parseInt(prompt("Digite o valor do comprimento: "))

total = largura * comprimento
soma += total

opcao = prompt("Deseja continuar? \nS - Sim \nN - Não ")

if (opcao == "S") {
  do {
    comodo = prompt("Digite o nome do comodo: ")
    largura = parseInt(prompt("Digite o valor da largura: "))
    comprimento = parseInt(prompt("Digite o valor do comprimento: "))
    total = largura * comprimento
    soma += total
    opcao = prompt("Deseja continuar? \nS - Sim \nN - Não ")
  } while (opcao == "S")
  alert(`A area da residencia é de Aproximadamente ${soma}m²`)
} else {
  alert(`A area da residencia é de Aproximadamente ${soma}m²`)
}