function probarValidarCantidadFamiliares(){
    
    console.assert(
        validarCantidadFamiliares('4.2') === 'El numero no puede tener decimales',
        'Validar cantidad de familiares no validó que el numero no tenga decimales'
    );
    console.assert(
        validarCantidadFamiliares(0) === 'El campo no puede estar vacio',
        'Validar cantidad de familiares no validó que el campo no este vacío'
    );
    console.assert(
        validarCantidadFamiliares(4) === 4,
        'Validar cantidad de familiares fallo con una cantidad de familiares valida'
    );
}

function probarValidarEdades(){
    console.assert(
        validarEdades(4.2) === 'El numero no puede tener decimales',
        'Validar edades no validó que el numero no tenga decimales'
    );
    console.assert(
        validarEdades(0) === 'El campo no puede estar vacio',
        'Validar edades no validó que el campo no este vacío'
    );
    console.assert(
        validarEdades(4) === 4,
        'Validar edades fallo con una edad valida'
    );
}

probarValidarCantidadFamiliares();
probarValidarEdades();
