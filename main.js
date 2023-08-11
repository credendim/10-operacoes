// Declaração das variaveis

// let operacao = prompt("Informe a operação desejada: ")
var operacao = document.getElementById('operador')
var numero1 = document.getElementById("numero1").textContent
var numero2 = document.getElementById("numero2").textContent

// let numero1 = Number(prompt("Informe o primeiro número: "))
// let numero2 = Number(prompt("Informe o segundo número: "))

// Verificar a operação matematica selecionada
if (operacao == "1") {
    let resultado = numero1 + numero2
    // console.log("O reswultado da soma é: " + resultado + ".")
    document.getElementById('resultado').innerHTML = resultado; 
}
else if (operacao == "2") {
    let resultado = numero1 - numero2
    console.log("O resultado da subtração é: " + resultado + ".")
}
else if (operacao == "3") {
    let resultado = numero1 * numero2
    console.log("O resultado da subtração é: " + resultado + ".")
}
else if (operacao == "4") {
    let resultado = numero1 / numero2
    console.log("O resultado da divisão é: " + resultado + ".")
}
