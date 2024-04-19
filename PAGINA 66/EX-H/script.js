/* 
    Elaborar um programa que apresente como resultado o valor de uma potência de uma base
    qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
    do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
    portuguol (^). 
*/

let valor
let expoente
let resultado = 1

valor = parseFloat(prompt("Digite um valor: "))
expoente = parseFloat(prompt("Digite o valor do expoente: "))

for (let contadora = 1; contadora < (expoente+1); contadora++) {
    resultado *= valor
}

console.log(`${valor} ^ ${expoente} = ${resultado}`)