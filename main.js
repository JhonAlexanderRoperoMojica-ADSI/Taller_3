let contador = 1, calidad = 0;

let cantidad = parseInt(prompt("ingrese la cantidad de las gallinas"));

while (contador <= cantidad) {
    let peso = parseInt(prompt(`ingrese lel peso de las gallinas ${contador}`));
    let altura = parseInt(prompt(`ingrese la altura de las gallinas ${contador}`));
    let huevos = parseInt(prompt(`ingrese la cantidad de huevos de las gallinas ${contador}`));
    calidad += (peso * altura) / huevos;
    contador ++;
}

let promedio = calidad * cantidad;

alert(calidad);
alert(promedio);