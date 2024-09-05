let inputVelomax = document.getElementById("velomax");
let inputVelove = document.getElementById("velove");
let divSaida = document.getElementById("saida");
let botaoCalcular = document.getElementById("calculart");
botaoCalcular.onclick = calcularMulta;




function multa(){
    let velomax = Number(inputVelomax.value);
    let velove = Number(inputVelove.value);

    let velopa = velove - velomax
}

vinte = velomax * 0,2;
ciquenta = velomax * 0,5;
porpa = (velopa/veloma) * 100;

let multa = "R$0";

if (velopa = 0 ){
    multa = "0"
} else if(velopa < vinte){
    multa ="R$130,16"
} else if(vinte< velopa <= cinquenta){
    multa ="R$195,23"
}
else if(velopa > cinquenta) {
    multa = "R$880,41"
}

if (velopa <= 0){
    divSaida.innerHTML = '<p>Nenhuma multa</p>';
} else{
    divSaida.innerHTML = '<p>Você exedeu ${porpa}$ da velocidade. Sua multa é de ${mult}$'
}

