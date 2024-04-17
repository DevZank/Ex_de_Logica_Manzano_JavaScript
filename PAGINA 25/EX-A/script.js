// Conversão de temperatura, de Celsius para Fahrenheit.

let celsius      // Real
let fahrenheit   // Real

celsius = parseFloat(prompt("Digite a temperatura em Graus Celsius: "))

fahrenheit = (9 * celsius + 160) / 5

alert(`${celsius}ºC, em fahrenheit é: ${fahrenheit}ºF`)