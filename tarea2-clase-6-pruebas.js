function probarValidarSalarios(){
    console.assert(
        validarSalarios(0) === 'El campo no puede estar vacio',
        'Validar salarios no validó que el campo no este vacío'
    );
    console.assert(
        validarSalarios(4) === 4,
        'Validar salarios fallo con un salario valido'
    );
}

probarValidarSalarios();