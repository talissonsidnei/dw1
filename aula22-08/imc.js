//let peso = prompt("Digite seu peso")
//let altura = prompt("Digite sua altura")
//let imc = peso / (altura + altura)
//document.write("IMC = ", imc)

let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")
let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = calculaImc

function calculaImc(){
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)


    let imc = peso / (altura + altura)


    divSaida.innerText = imc


}



