addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        let avion = 20;
        let proyectil = 10;
        let contador = 1;
        
        while ((avion - proyectil) <= 10000){
            avion = avion + 20;
            proyectil = proyectil + 10;
            contador+= 1;

            alert(`La distancia del avion ${contador} es: ${avion}`);
            alert(`La distancia del proyectil ${contador} es: ${proyectil}`);
        }
    })
})