/* 
  Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
  dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não 
  foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o 
  valor da média do aluno para qualquer condição.
*/

let lerNota1
let lerNota2
let lerNota3
let lerNota4

let notasMedia

lerNota1 = parseFloat(prompt("Digite a 1º Nota: "))
lerNota2 = parseFloat(prompt("Digite a 2º Nota: "))
lerNota3 = parseFloat(prompt("Digite a 3º Nota: "))
lerNota4 = parseFloat(prompt("Digite a 4º Nota: "))

notasMedia = (lerNota1 + lerNota2 + lerNota3 + lerNota4) / 4

if (notasMedia >=  5) {
  alert (`O aluno foi Aprovado com a média de: ${notasMedia}`)
} else {
  alert (`O aluno foi Reprovado com a média de: ${notasMedia}`)
}