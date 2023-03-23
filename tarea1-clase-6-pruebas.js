function probarValidarCantidadFamiliares(){
    console.assert(
        validarCantidadFamiliares('4.2') === 'El numero no puede tener decimales',
        'Validar nombre no validó que el numero no tenga decimales'
    );
}

probarValidarCantidadFamiliares();