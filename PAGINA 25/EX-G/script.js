// Somas e multiplicações de 4 valores

let A                                                    // Inteiro
let B                                                    // Inteiro
let C                                                    // Inteiro
let D                                                    // Inteiro
let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12    // Inteiro

A = parseInt(prompt("Digite o valor de A "))
B = parseInt(prompt("Digite o valor de B "))
C = parseInt(prompt("Digite o valor de C "))
D = parseInt(prompt("Digite o valor de D "))

r1 = A + B
r2 = A + C
r3 = A + D
r4 = B + C
r5 = B + D
r6 = C + D
r7 = A * B
r8 = A * C
r9 = A * D
r10 = B * C
r11 = B * D
r12 = C * D

alert(`O resultado das somas foram: ${r1}, ${r2}, ${r3}, ${r4}, ${r5}, ${r6}`)
alert(`O resultado das multiplicações foram: ${r7}, ${r8}, ${r9}, ${r10}, ${r11}, ${r12}`)