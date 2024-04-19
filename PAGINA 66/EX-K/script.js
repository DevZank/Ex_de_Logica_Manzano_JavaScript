/* 
    Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
    situados na faixa numérica de 1 a 10.
*/

let resultado = 1

for (let controladora = 1; controladora < 11; controladora++) {
    if (controladora % 2 != 0) {
        for (let contadora = 1; contadora <= controladora; contadora++) {
            resultado *= contadora
        }
        console.log(`${controladora}! = ${resultado}`)
        resultado = 1
    }    
}