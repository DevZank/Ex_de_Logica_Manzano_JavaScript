/* 
    Apresentar os quadrados dos números inteiros de 15 a 200.
*/

let resultado = 0

for (let contadora = 15; contadora < 201; contadora++) {
    resultado = contadora * contadora
    console.log(`Contadora ^ 2 = ${resultado}`)
}