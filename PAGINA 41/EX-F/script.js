/* 
  Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
  segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
  referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. 
*/

let ValorA
let ValorB
let ValorC

let variavelDeAjuste

ValorA = parseFloat(prompt("Digite o valor de A: "))
ValorB = parseFloat(prompt("Digite o valor de B: "))
ValorC = parseFloat(prompt("Digite o valor de C: "))

if (ValorA > ValorB) {
  variavelDeAjuste = ValorA
  ValorA = ValorB
  ValorB = variavelDeAjuste
}

if (ValorB > ValorC) {
  variavelDeAjuste = ValorB
  ValorB = ValorC
  ValorC = variavelDeAjuste
}

if (ValorA > ValorB) {
  variavelDeAjuste = ValorA
  ValorA = ValorB
  ValorB = variavelDeAjuste
}

alert (`Os valores em ordem crescente são: ${ValorA}, ${ValorB}, ${ValorC}`)
