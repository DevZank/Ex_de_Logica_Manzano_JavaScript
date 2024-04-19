/* 
    Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 
*/

let valor = 0

valor = parseInt(prompt("Digite um valor: "))

for (let contadora = 1; contadora < 11; contadora++) {  
    console.log(`${valor} * ${contadora} = ${valor * contadora}`)
}