function validarSalarios(salarios){
    
    /*if(!/^\d*$/.test(salarios)){
        return 'El numero no puede tener decimales';
    }*/
    if(salarios === 0){
        return 'El campo no puede estar vacio';
    } 
//}
return salarios;

}