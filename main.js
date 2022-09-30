addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        let alumnos = parseInt(prompt("DIGITE LA CANTIDAD DE ALUMNOS: "));
        let contador = 1;
        while (contador <= alumnos) {
            
            let creditos1 = parseInt(prompt(`DIGITE LOS CREDITOS DE LA MATERIA FUNDAMENTO: ${contador} `));
            let nota1 = parseFloat(prompt(`DIGITE LA NOTA DE LA MATERIA FUNDAMENTO: ${contador}`));

            let creditos2 = parseInt(prompt(`DIGITE LOS CREDITOS DE LA MATERIA BD: ${contador}`));
            let nota2 = parseFloat(prompt(`DIGITE LA NOTA DE LA MATERIA BD: ${contador}`));

            let creditos3 = parseInt(prompt(`DIGITE LOS CREDITOS DE LA MATERIA ÉTICA: ${contador}`));
            let nota3 = parseFloat(prompt(`DIGITE LA NOTA DE LA MATERIA ÉTICA: ${contador}`));
            
            let final = (creditos1 * nota1) + (creditos2 * nota2) + (creditos3 * nota3);
            let prom_materias = (nota1 + nota2 + nota3) / 3;
            let total_final = final + prom_materias;
            let suma_creditos = creditos1 + creditos2 + creditos3;
            let total_nota = total_final / suma_creditos;
            contador ++;
            
            alert(`El promedio del estudiante es: ${total_nota}`);
        }
    })
})