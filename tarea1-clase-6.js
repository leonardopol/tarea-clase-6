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


let contador = 0;
document.querySelector("#boton-enviar").onclick = function(event){
    const $familiares = Number(document.querySelector("#cantidad-familiares").value);

    const $cantidadFamiliares = validarCantidadFamiliares($familiares);
        if($cantidadFamiliares !== 'El numero no puede tener decimales' && $cantidadFamiliares !== 'El campo no puede estar vacio'){
            if(contador === 0){
                contador++;
                crearFamiliares($cantidadFamiliares);
                mostrarBotonCalcular();
            }

        } else if($cantidadFamiliares === 'El numero no puede tener decimales'){
            let error = 'El numero no puede tener decimales';
            
            visibilizarErrores(error);
        } else if($cantidadFamiliares === 'El campo no puede estar vacio'){
            let error = 'El campo no puede estar vacio';
            
            visibilizarErrores(error);
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
    const $nodoDiv = document.querySelector("#boton-calcular");
    $nodoDiv.className = "";
}

function ocultarBotonCalcular(){
    const $nodoDiv = document.querySelector('#boton-calcular').className = 'oculto';
}

document.querySelector("#boton-calcular").onclick = function(event){

    //const numeroFamiliares = obtenerCantidadFamiliares();
    const numeroFamiliares = Number(document.querySelector("#cantidad-familiares").value);
        if(numeroFamiliares > 0){
            const edades = leerEdades(numeroFamiliares);
            const mayorEdad = calcularMayorEdad(edades);
            const menorEdad = calcularMenorEdad(edades);
            const promedioEdad = calcularPromedioEdad(edades);
            mostrarEdad("mayor", mayorEdad);
            mostrarEdad("menor", menorEdad);
            mostrarEdad("promedio", promedioEdad);
            visibilizarResultados();
            
        }
    event.preventDefault();
}

function leerEdades(numeroFamiliares){

    let edades = [];
    for(let i = 0; i < numeroFamiliares; i++){
        edades[i] = Number(document.querySelector(`#familiar${i}`).value);
    }
    return edades;
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

function visibilizarErrores(error){

    document.querySelector("#cantidad-familiares").className = "error";
    document.querySelector("#mostrar-errores").className = "";
    document.querySelector("#error").textContent = error;
    
}

function ocultarErrores(){

    document.querySelector("#mostrar-errores").className = "oculto";
    document.querySelector("#error").textContent = "";
    document.querySelector("#cantidad-familiares").className = "error";
}

function borrarIntegrantes(){
    const $familiar = document.querySelectorAll('.familiar');
    for(let i = 0; i < $familiar.length; i++){
        $familiar[i].remove();
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
        contador = 0;
}

function limpiar(){

    ocultarErrores();
}

document.querySelector("#boton-limpiar").onclick = limpiar;
document.querySelector("#boton-reset").onclick = resetear;
