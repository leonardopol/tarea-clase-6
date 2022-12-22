function calcularMayorEdad(edades){
    let mayorEdad = 0;
    for(let i = 0; i < edades.length; i++){
        if(mayorEdad < edades[i]){
            mayorEdad = edades[i];
        }
    }
    return mayorEdad;
}

function calcularMenorEdad(edades){
    let menorEdad = 1000000;
    for(let i = 0; i < edades.length; i++){
        if(edades[i] < menorEdad){
            menorEdad = edades[i];
        }
    }
    return menorEdad;
}

function calcularPromedioEdad(edades){
    let suma = 0;
    let contador = 0;
    for(let i = 0; i < edades.length; i++){
        suma += edades[i];
        contador ++;
    }
    return (suma / contador).toFixed(2);
}