/* 
    Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
    1 até 500. 
*/

let soma = 0

for (let contadora = 1; contadora < 501; contadora++) {
    if (contadora % 2 == 0) {
        soma += contadora
    }
}

alert(`A soma dos 500 primeiros números pares inteiros é: ${soma}`)