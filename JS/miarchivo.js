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
    suma_horas = suma_horas + horas_trabajadas;
    console.log("Suma horas: " +suma_horas+ " horas");
    console.log("Valor hora: $" +valor_hora);
    pago_dia = horas_trabajadas * valor_hora;
    console.log("El pago del dia es $ " +pago_dia);
    monto = monto + pago_dia;
    console.log("Sueldo: " +monto);

    if(suma_horas >= max_horas) {
        break;
    }

    suma_dias++;
    console.log("Suma días trabajados: "+suma_dias);


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

// descuentos
monto = monto - ((monto * descuentos_legales) / 100);

// salida final
alert("Recibirás un pago de " +monto.toFixed(0)+ " pesos líquido");