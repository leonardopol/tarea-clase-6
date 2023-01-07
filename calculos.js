function calcularMayorSalarioAnual(){
    let mayor = 0;
    for(let i = 0; i < indice; i++){
        let $salario = Number(document.querySelector(`#salario${i}`).value);
        if($salario !== 0){
            if($salario > mayor){
                mayor = $salario;
            }
        }
    }
    return (mayor).toFixed(2);
}

function calcularMenorSalarioAnual(){
    let menor = Infinity;
    for(let i = 0; i < indice; i++){
        let $salario = Number(document.querySelector(`#salario${i}`).value);
        if($salario !== 0){
            if($salario < menor){
                menor = $salario;
            }
        }
    }
    return (menor).toFixed(2);
}

function calcularSalarioPromedioAnual(){
    let suma = 0;
    for(let i = 0; i < indice; i++){
        let $salario = Number(document.querySelector(`#salario${i}`).value);
        if($salario !== 0){
           suma += $salario;
        }
    }
    return (suma / indice).toFixed(2);
}

function calcularSalarioPromedioMensual(){
    const MESES_DEL_ANIO = 12;
    const promedioAnual = calcularSalarioPromedioAnual();
    return (promedioAnual / MESES_DEL_ANIO).toFixed(2);
}