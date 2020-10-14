/*Como desde el HTML estamos llamando a un Script, no es necesario pornelo aqui*/
/*Desclaramos una funcion para calcula el volumen*/
/*IMPORTANTE NO OLVIDARNOS DEL () AL FINAL DE LA FUNCION*/

function sombrero (){
    /*Declaramos variables*/
    h =  prompt("Introduce la altura del sombrero (en centimetros)");
    r = prompt("Introduce el radio de tu cabeza (en centimetros)");
    pi = 3.1415;
    /*Calculo del area y del volumen*/
    area = Math.round(pi*r*(r + h));
    /*que gusto redondear así*/
    volumen = Math.round(1/3 * pi * (r*r) * h);
    /*Imprimir por pantalla*/
    alert("El area de tu sombrero es " + area + " centimetros cuadrados");
    alert("El volumen de tu sombrero es " + volumen + " centimetros cubicos");
    /*las tildes no le gustan*/
}
/*IMPORTANTE, una vez declarada la funcion, tenemos que llamarla*/
sombrero();