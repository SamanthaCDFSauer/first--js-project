let firstNumber = Number(prompt("Digite o primeiro número: "))
let secondNumber = Number(prompt("Digite o segundo número: "))

const sum = firstNumber + secondNumber
alert(`O resultado da soma é ${sum}`)

const sub = firstNumber - secondNumber
alert(`O resultado da subtração é ${sub}`)

const multi = firstNumber * secondNumber
alert(`O resultado da multiplicação é ${multi}`)

const div = (firstNumber / secondNumber).toFixed(2)
alert(`O resultado da divisão é ${div}`)

const restDiv = (firstNumber % secondNumber).toFixed(2)
alert(`O resto da divisão é ${restDiv}`)

if (sum % 2 == 0) {
    alert(`A soma dos dois números é par.`)
} else {
    alert(`A soma dos dois números é ímpar.`)
}

if (firstNumber == secondNumber) {
    alert(`Os números inseridos são iguais.`)
} else {
    alert(`Os números inseridos são diferentes.`)
}