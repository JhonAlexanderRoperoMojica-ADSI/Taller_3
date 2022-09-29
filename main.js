addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let perosnas = 40;
        let mujeres = 1;
        let hombres = 7;
        let suma = 0;

        while (suma <= perosnas){
            suma = mujeres + hombres;
            mujeres+= 1;
            hombres+= 1;

            alert(`La cantidad de mujeres es: ${mujeres}`);
            alert(`La cantidad de hombres es: ${hombres}`);
            alert(`La cantidad total de mujeres es: ${mujeres}`);
            alert(`Cantidad de personas totales es: ${suma}`);
        }
    })
})