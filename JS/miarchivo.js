const max_horas = 45;
const max_dias = 7;
const descuentos_legales = 12.25;

let monto = 0; // horas trabajadas * valor hora * suma días 
let suma_horas = 0;
let suma_dias = 0;
let pago_dia = 0;
let nombre_dias = prompt("Ingrese día trabajado");
console.log(nombre_dias);
let valor_hora = parseFloat(prompt("Ingrese valor de la hora trabajada"));
console.log(+valor_hora);
let horas_trabajadas = parseFloat(prompt("Ingrese número de horas trabajadas"));
console.log(+horas_trabajadas);

while ((nombre_dias != "ESC") && (nombre_dias != null)) {

    // suma de horas trabajadas durante el día
    suma_horas = suma_horas + horas_trabajadas;
    console.log("Suma horas: " +suma_horas+ " horas");

    // valor de la hora trabajada
    console.log("Valor hora: $" +valor_hora);
    pago_dia = horas_trabajadas * valor_hora;

    // pago del día
    console.log("El pago del dia es $ " +pago_dia);
    monto = monto + pago_dia;
    console.log("Sueldo: " +monto);

    // si se pasa de las 45 horas legales semanales hay un break
    if(suma_horas >= max_horas) {
        break;
    }
    
    // suma de los días trabajados
    suma_dias++;
    console.log("Suma días trabajados: "+suma_dias);

    // si se pasa de los 7 días de la semana hay un break
    if (suma_dias >= max_dias) {
        break;
    }

    nombre_dias = prompt("Ingrese día trabajado (ESC para salir)");
    console.log(nombre_dias);
    if ((nombre_dias != "ESC") && (nombre_dias != null)) {
    valor_hora = parseFloat(prompt("Ingrese valor de la hora trabajada"));
    console.log(+valor_hora);
    horas_trabajadas = parseFloat(prompt("Ingrese número de horas trabajadas"));
    console.log(+horas_trabajadas);
    } else {
        break;
    }
}


// descuentos con función
function quitarIVA(monto) {
    return monto - ((monto * descuentos_legales) / 100);
}
let sueldoLiquido = quitarIVA(monto);
alert("Recibirás un pago de "+sueldoLiquido.toFixed(0)+ " pesos líquido");

/* monto = monto - ((monto * descuentos_legales) / 100); */

// salida final
/* alert("Recibirás un pago de " +monto.toFixed(0)+ " pesos líquido"); */