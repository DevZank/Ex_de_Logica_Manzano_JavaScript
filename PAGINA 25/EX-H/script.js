// O programa mede o volume de uma caixa retangular.

let comprimento            // Real
let largura                // Real
let altura                 // Real
let volume                 // Real

comprimento = parseFloat(prompt("Digite o comprimento da caixa retangular: "))
largura = parseFloat(prompt("Digite a largura da caixa: "))
altura = parseFloat(prompt("Digite a altura da caixa: "))

volume = comprimento * largura * altura

alert(`O volume desta caixa retangular é de: ${volume}`)