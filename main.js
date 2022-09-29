addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let procesos = 10;
        let contador = 1;
        let suma, resta, divicion, multiplicacion;

        while (contador <= procesos){
            let numero1 = parseInt(prompt(`Ingrese el primer Numero: `));
            let numero2 = parseInt(prompt("Ingrese el segundo Numero: "));

            suma = numero1 + numero2;
            resta = numero1 - numero2;
            divicion = numero1 / numero2;
            multiplicacion = numero1 * numero2;

            contador+= 1;

            alert(suma);
            alert(resta);
            alert(divicion);
            alert(multiplicacion);
        }
    })
})