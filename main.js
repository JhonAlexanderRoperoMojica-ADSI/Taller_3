addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let estudiantes = 5;
        let contador = 1;

        while (contador <= estudiantes){
            let nombre = prompt(`Ingrese el nombre del estudiante ${contador}`);
            let apellido = prompt(`Ingrese el apellido del estudiante ${contador}`);
            let edad = parseInt(prompt(`Ingrese la edad del estudiante ${contador}`));
            let promedio = parseFloat(prompt(`Ingrese el promedio del estudiante ${contador}`));

            contador+= 1;

            alert(`el promedio del estudiante llamado: ${nombre} es: ${promedio}`);
        }
    })
})