/*
  Elaborar um programa que apresente como resultado o valor de uma potência de uma base
  qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
  do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
  portuguol (^). 
*/

let base
let expoente
let resultado = 1
let contadora = 1       

base = parseInt(prompt("Digite o Valor da base: "))
expoente = parseInt(prompt("Digite o valor do expoente: ")) 

while (contadora <= expoente) {
  resultado *= base
  contadora++
}

alert (`O resultado de ${base} elevado a ${expoente} é: ${resultado}`)
