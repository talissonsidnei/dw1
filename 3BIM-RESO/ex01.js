function somaSerie(count){


    let soma = 0

    


    for(let x=1, y=1; x<=cont; x++, y+=2){
        soma = soma + x*y

    }

    return soma

}

console.log(somaSerie(3)) // 1 + 6 + 15 = 22
console.log(somaSerie(4)) // 1 + 6 + 15 + 28 = 50