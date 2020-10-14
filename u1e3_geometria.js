function areatriangulo (b, a){
    area = (b*a)/2;
    document.write("El area del triangulo es " + area);
}

function perimetroTrianguloEquilatero (l){
    perimetro = l*3;
    document.write("<br>El perimetro del triangulo equilaterio es " + perimetro);
}

function perimetroTrianguloIsosceles (l1, l2){
    perimetro = l1 + l1 + l2;
    document.write("<br>El perimetro del triangulo isosceles es " + perimetro);
}

function perimetroTrianguloEscaleno (l1, l2, l3){
    perimetro = l1 + l2 + l3;
    document.write("<br>El perimetro del triangulo escaleno es " + perimetro);
}

function areaCuadrado (l){
    area = (l*l);
    document.write("<br>El area del cuadrado es " + area);
}

function perimetroCuadrado (l){
    perimetro = l*4;
    document.write("<br>El perimetro del cuadrado es " + perimetro);
}

function areaRectangulo(l1, l2){
    area = (l1 * l2);
    document.write("<br>El area del rectangulo es " + area);
}

function areaCirculo (r){
    area = (Math.PI * r * r);
    document.write("<br>El area del circulo es " + area);
}
function longitudCircunferencia (r){
    longitud = (Math.PI * 2 * r);
    document.write("<br>La longitud de la circunferencia es " + longitud);
}