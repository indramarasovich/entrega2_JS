const planes = [ "Plan x2 semanas", "Plan x4 semanas", "Plan x8 semanas"]

function calculo(dias, porcentaje) {
    let resultado = (dias * 300)*porcentaje;
    return resultado;
}
  
function inicio() {
    let opcion = prompt("¡Bienvenido a Meta Movimiento! \nConocé los planes: \n 1. "+ planes[0] +"\n 2. "+ planes[1] +"\n 3. "+ planes[2] +"\n 4. Siguiente paso");
    return opcion;
}

function costo() {
    let opcion = prompt("Ahora que conoces todos los planes, elegí el que más te guste para saber el precio promocional \n 1. "+ planes[0] +"\n 2. "+ planes[1] +"\n 3. "+ planes[2] +"\n 4. Salir");
    return opcion;
}

function metaMovimiento() {
    let plan = inicio();
    plan = parseInt(plan)

    while (plan !== 4) {
        switch (plan) {
            case 1:
                alert("El "+ planes[0] +"cuenta con 10% de descuento!\n- 2 clases por semana \n- Trabajaremos flexibilidad y aeróbico \n- El precio por clase es de $300");
                break;

            case 2:
                alert("El "+ planes[1] +"cuenta con 15% de descuento!\n- 3 clases por semana \n- Trabajaremos flexibilidad, resistencia, aeróbico y fuerza\n- El precio por clase es $300");
                break;
  
            case 3:
                alert("El "+ planes[2] +"cuenta con 20% de descuento!\n- 3 clases por semana \n- Trabajaremos flexibilidad, resistencia, aeróbico, fuerza y estabilidad \n- El precio por clase es $300");
                break;
  
            default:
                alert("Opcion no válida");
                break;
         }
        
         plan = inicio();
         plan = parseInt(plan)
    }

    let total = costo();
    total = parseFloat(total)

    while (total !== 4) {
        switch (total) {
            case 1:
                precio = calculo(4, 0.90)
                alert("El precio es: $" + precio)
                break;

            case 2:
                precio = calculo(12, 0.85)
                alert("El precio es: $" + precio)
                break;
  
            case 3:
                precio = calculo(24, 0.80)
                alert("El precio es: $" + precio)
                break;
  
            default:
                alert("Opcion no válida");
                break;
         }
        
        total = costo();
        total = parseFloat(total)
    }
  }
  
  metaMovimiento();
  