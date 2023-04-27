/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


let noHayFamiliaresCreados = true;
document.querySelector("#boton-enviar").onclick = function(event){
    
    const $familiares = Number(document.querySelector("#cantidad-familiares").value);

    const $cantidadFamiliares = validarCantidadFamiliares($familiares);
        if($cantidadFamiliares !== 'El numero no puede tener decimales' && $cantidadFamiliares !== 'El campo no puede estar vacio'){
            if(noHayFamiliaresCreados){
                noHayFamiliaresCreados = false;
                crearFamiliares($cantidadFamiliares);
                mostrarBotonCalcular();
            }

        } else if($cantidadFamiliares === 'El numero no puede tener decimales'){
            let error = 'El numero no puede tener decimales';
            
            visibilizarErroresCantidadDeFamiliares(error);
        } else if($cantidadFamiliares === 'El campo no puede estar vacio'){
            let error = 'El campo no puede estar vacio';
            
            visibilizarErroresCantidadDeFamiliares(error);
        }
    event.preventDefault();
}

function crearFamiliares(numeroFamiliares){

    for(let i = 0; i < numeroFamiliares; i++){

        let $nodoDiv = document.querySelector("#crearFamiliares");
        $nodoDiv.className = "integrante";
        let $labels = document.createElement("labels");
        let $inputs = document.createElement("input");
        
        $inputs.id = `familiar${i}`;
        $inputs.className = "familiar";
        $inputs.type = "number";
        $labels.htmlFor = $inputs.id;
        $labels.className = "familiar";
        $labels.textContent = `familiar Nro${i + 1}`;
        let $saltoDeLinea = document.createElement("br");
        $saltoDeLinea.className = "familiar";
        $nodoDiv.appendChild($labels);
        $nodoDiv.appendChild($inputs);
        $nodoDiv.appendChild($saltoDeLinea);
        }
}

function borrarFamiliares(){
    $nodoDiv.removeChild($labels);
    $nodoDiv.removeChild($inputs);
    $nodoDiv.removeChild($saltoDeLinea);
}

function mostrarBotonCalcular(){
    const $botonCalcular = document.querySelector("#boton-calcular").className = "";
}

function ocultarBotonCalcular(){
    const $botonCalcular = document.querySelector('#boton-calcular').className = 'oculto';
}

document.querySelector("#boton-calcular").onclick = function(event){
    
    const $numeroFamiliares = Number(document.querySelector("#cantidad-familiares").value);
    cambiarClaseAfamiliar($numeroFamiliares);

        if($numeroFamiliares > 0){
            let edades = [];
            let contadorErrores = 0;
            for(let j = 0; j < $numeroFamiliares; j++){        
                edades[j] = Number(document.querySelector(`#familiar${j}`).value);
                let validar = validarEdades(edades[j]);
                if(validar === 'El numero no puede tener decimales' || validar === 'El campo no puede estar vacio'){
                    let error = validar;
                    visibilizarErroresEdades(error);
                    contadorErrores++;
                }
            }
            if(contadorErrores === 0){  
                calculos(edades);
            }
        }
    event.preventDefault();
}

function calculos(edades){
    const mayorEdad = calcularMayorEdad(edades);
    const menorEdad = calcularMenorEdad(edades);
    const promedioEdad = calcularPromedioEdad(edades);
    mostrarEdad("mayor", mayorEdad);
    mostrarEdad("menor", menorEdad);
    mostrarEdad("promedio", promedioEdad);
    visibilizarResultados();
}

function mostrarEdad(tipo, valor){

    const $resultados = document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function visibilizarResultados(){

    document.querySelector("#mostrar-resultados").className = "";
}

function ocultarResultados(){

    document.querySelector("#mostrar-resultados").className = "oculto";
}

function visibilizarErroresCantidadDeFamiliares(error){

    document.querySelector("#cantidad-familiares").className = "error";
    document.querySelector("#mostrar-errores").className = "";
    document.querySelector("#error").textContent = error;
    
}

function visibilizarErroresEdades(error){
    const $numeroFamiliares = Number(document.querySelector("#cantidad-familiares").value);
    
    for(let i = 0; i < $numeroFamiliares; i++){
    
       if(document.querySelector(`#familiar${i}`).value === ""){
           document.querySelector(`#familiar${i}`).className = "error";
       }
       if(!/^\d*$/.test(document.querySelector(`#familiar${i}`).value)){
        document.querySelector(`#familiar${i}`).className = "error";
       } 
    }
    document.querySelector("#mostrar-errores").className = "";
    document.querySelector("#error").textContent = error;
    
}

function ocultarErrores(){

    document.querySelector("#mostrar-errores").className = "oculto";
    document.querySelector("#error").textContent = "";
    document.querySelector("#cantidad-familiares").className = "";
}

function borrarIntegrantes(){
    const $familiar = document.querySelectorAll('.familiar');
    for(let i = 0; i < $familiar.length; i++){
        $familiar[i].remove();
    }
}

function cambiarClaseAfamiliar($numeroFamiliares){
    document.querySelector("#mostrar-errores").className = "oculto";
    for(let i = 0; i < $numeroFamiliares; i++){
    
        if(document.querySelector(`#familiar${i}`).className === "error"){
            document.querySelector(`#familiar${i}`).className = "familiar";
        } 
     }
}

function resetear(){

    let $familiares = document.querySelectorAll(".familiar");

    for(let i = 0; i < $familiares.length; i++){
        $familiares[i].remove();
        }
        borrarIntegrantes();
        ocultarResultados();
        ocultarBotonCalcular();
        ocultarErrores();
        noHayFamiliaresCreados = true;
}

/*function limpiar(){

    ocultarErrores();
}*/

//document.querySelector("#boton-limpiar").onclick = limpiar;
document.querySelector("#boton-reset").onclick = resetear;
