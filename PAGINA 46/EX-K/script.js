/*
  Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
  banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
  nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
  do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
  calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
  total acumulado da área residencial.
*/

let largura_comodo
let altura_comodo
let area_comodo
let verificacao
let nome_comodo

verificacao = "S"

while (verificacao == "S") {
  nome_comodo = prompt("Escreva o nome do comodo da casa: ")
  largura_comodo = parseFloat(prompt("Escreva a largura do comodo em metros: "))
  altura_comodo = parseFloat(prompt("Escreva a altura do comodo em metros: "))

  area_comodo = altura_comodo * largura_comodo

  alert(`A area do comodo ${nome_comodo} é: ${area_comodo}m²`)
  verificacao = prompt("Continuar? S/N")
}

