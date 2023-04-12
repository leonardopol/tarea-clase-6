function validarCantidadFamiliares($cantidadFamiliares){
    if(!/^\d*$/.test($cantidadFamiliares)){
        return 'El numero no puede tener decimales';
    }//else {
       // return $cantidadFamiliares;
    //}

    if($cantidadFamiliares === 0){
        return 'El campo no puede estar vacio';
    }
    else {
         return $cantidadFamiliares;
    }
}

/*function validarEdades(edades){
    for(let i = 0; i < edades.lenght; i++){
        if(!/^\d*$/.test(edades[i])){
            return 'El numero no puede tener decimales';
        }
        if(edades[i] === 0){
            return 'El campo no puede estar vacio';
        }
    }
    return 
}*/

