const VENTAS_BASE = 5;

function validarVentas(){
    let valor = recuperarTexto("txtVentas");
    let error = document.getElementById("errVentas");

    if(valor === ""){
        error.textContent = "El número de ventas no puede estar vacío.";
        return false;
    }

    if(isNaN(valor)){
        error.textContent = "Solo se permiten números.";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos permitidos.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarSueldoBase(){
    let valor = recuperarTexto("txtSueldoBase");
    let error = document.getElementById("errSueldoBase");

    if(valor === ""){
        error.textContent = "El salario base no puede estar vacío.";
        return false;
    }

    if(isNaN(valor)){
        error.textContent = "Solo se permiten números.";
        return false;
    }

    error.textContent = "";
    return true;
}
function validarPrecio(){
    let valor = recuperarTexto("txtPrecio");
    let error = document.getElementById("errPrecio");

    if(valor === ""){
        error.textContent = "El precio del producto no puede estar vacío.";
        return false;
    }

    if(isNaN(valor)){
        error.textContent = "Solo se permiten números.";
        return false;
    }

    error.textContent = "";
    return true;
}
//CALCULAR COMISION
function calcularComision(numeroVentas,precioProducto){
    let comision = 0;
    if(numeroVentas > VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;
}

function calcular(){

//VALIDACIONES
let hayErrores = false;

    if(!validarSueldoBase()) hayErrores = true;
    if(!validarVentas()) hayErrores = true;
    if(!validarPrecio()) hayErrores = true;

    if(hayErrores) return;

    //CONVIERTE TEXTO A NUMERO
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    // INVOCA FUNCION CALCULAR COMISION
    let comision = calcularComision(numeroVentas,precioProducto);

    // CALCULO SUELDO TOTAL
    let total = sueldoBase + comision;

    //RECUPERA PROPIEDAD DE LOS SPAN HTML
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    //RESULTADO DE LA VARIABLE LO CONVIERTE PARA VISUALIZAR EN HTML.
    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}