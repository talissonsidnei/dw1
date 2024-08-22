let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("Altura")
let divSaida = document.getElementById("Saida")


let peso = Number(inputPeso.value)
let altura = Number(inputAltura.value)


let imc = peso / (altura + altura)


document.write("IMC = ", imc)


