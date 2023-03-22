function validarCantidadFamiliares($cantidadFamiliares){
    if(!/^\d*$/.test($cantidadFamiliares)){
        let error = "no puede tener decimales";
        visibilizarErrores(error);
    }else {
        return $cantidadFamiliares;
    }
}