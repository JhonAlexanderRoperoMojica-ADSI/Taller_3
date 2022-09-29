addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        let estudiantes = 2;
        let contador = 1;

        while (contador <= estudiantes){
            let nota1 = parseFloat(prompt(`Inresa la primera nota del estudiante ${contador}`));
            let nota2 = parseFloat(prompt(`Inresa la segunda nota del estudiante ${contador}`));
            let nota3 = parseFloat(prompt(`Inresa la tercera nota del estudiante ${contador}`));
            let nota4 = parseFloat(prompt(`Inresa la cuarta nota del estudiante ${contador}`));
            let nota5 = parseFloat(prompt(`Inresa la quinta nota del estudiante ${contador}`));

            let nota = nota1 + nota2 + nota3 + nota4 + nota5;
            let promedio = nota / 5;

            if (promedio < 3){
                alert(`El estudiante no puede presentar el examen su promedio fue: ${promedio}`);
            }
            else{
                alert(`El estudiante puede presentar el examen su promedio fue: ${promedio}`);
            }
            contador ++;
        } 
    })
})