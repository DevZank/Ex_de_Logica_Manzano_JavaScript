/* 
  Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com
  saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a
  mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da
  mensagem de saudação o nome previamente informado. 
*/

let nome
let sexo

nome = prompt("Digite seu nome: ")
sexo = prompt("Digite seu Sexo (M | F): ")

if (sexo == "M") {
  alert (`Ilmo Sr. ${nome}`)
} else if (sexo == "F") {
  alert (`Ilmo Sra. ${nome}`)
} else {
  alert ("Sexo Inserido Invalido!")
}