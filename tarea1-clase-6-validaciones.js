function validarCantidadFamiliares($cantidadFamiliares){

    if(!/^\d*$/.test($cantidadFamiliares)){
        return 'El numero no puede tener decimales';
    }

    if($cantidadFamiliares === 0){
        return 'El campo no puede estar vacio';
    }
    
    else {
         return $cantidadFamiliares;
    }
}

function validarEdades(edades){
        if(!/^\d*$/.test(edades)){
            return 'El numero no puede tener decimales';
        }
        if(edades === 0){
            return 'El campo no puede estar vacio';
        } 
    //}
    return edades;
}


