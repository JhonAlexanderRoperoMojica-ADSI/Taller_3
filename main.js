addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        let vendedor = parseInt(prompt("ingrese la cantidad de vendedores"));
        let contador = 1;

        while (contador <= vendedor) {
            let sueldo = parseFloat(prompt("digite el sueldo"));
            let Venta1 = parseFloat(prompt("ingrese la venta 1"));
            let comision1 = Venta1 * 0.1;
            let suma1 = Venta1 + comision1;
            let Venta2 = parseFloat(prompt("ingrese la venta 2"));
            let comision2 = Venta2 * 0.1;
            let suma2 = Venta2 + comision2;
            let Venta3 = parseFloat(prompt("ingrese la venta 3"));
            let comision3 = Venta3 * 0.1;
            let suma3 = Venta3 + comision3;
            let total = suma1 + suma2 + suma3;
            let Total_sueldo = sueldo + total

            alert(`El sueldo del empleado es: ${sueldo}`);
            alert(`Vendio un total de comiciones de: ${total}`);
            alert(`El sueldo del empleado total es: ${Total_sueldo}`);
            
            contador ++;
        }
    })
})