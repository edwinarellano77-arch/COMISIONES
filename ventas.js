const VENTAS_BASE = 5;


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
    // RECUPERA TEXTO DE CAJA DE TEXTO Y SE GUARDA EN VARIABLE COMPONENTE.
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");ESTE PASO SE SUPRIME CON LA FUNCION RECUPERAR TEXTO.
   
    
 
    // RECUPERA VALOR CAJAS DE TEXTO Y SE GUARDA EN VARIABLE STR.
    //let sueldoBaseStr = componenteSueldoBase.value;
    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    

    //CONVIERTE TEXTO A NUMERO
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    // INVOCA FUNCION CALCULAR COMISION//RECIVE 2 VARIABLES Y RETORNA COMISION
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