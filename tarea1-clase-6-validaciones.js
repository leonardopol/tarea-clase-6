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

