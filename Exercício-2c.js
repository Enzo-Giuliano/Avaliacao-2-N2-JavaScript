let x = 5;
function doAoQuadrado() {
    return function () {
        y = x * x;
        console.log("O quadrado de " + x + " é " + y + ".")
    }
}
doAoQuadrado()();
