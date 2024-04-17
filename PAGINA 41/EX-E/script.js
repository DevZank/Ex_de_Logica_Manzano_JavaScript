/* 
  Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
  segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
  referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. 
*/

let lerValorA
let lerValorB
let lerValorC

let _delta
let resultadoA
let resultadoB

lerValorA = parseFloat(prompt("Digite um valor para 'A': "))
lerValorB = parseFloat(prompt("Digite um valor para 'B': "))
lerValorC = parseFloat(prompt("Digite um valor para 'C': "))
 
console.log(lerValorA)

if (lerValorA == 0) {
  alert ("Impossivel fazer a equação de segundo grau")
} else {
  _delta = lerValorB ** 2 - 4 * lerValorA * lerValorC

  if (_delta < 0) {
    alert ("Não existe raizes Reais!")
  } else {
    resultadoA = (lerValorB + Math.sqrt(_delta)) / (2 * lerValorA)
    resultadoB = (lerValorB - Math.sqrt(_delta)) / (2 * lerValorA)
  }

  alert(`A primeira raiz é: ${resultadoA} a segunda raiz é ${resultadoB}`)
}