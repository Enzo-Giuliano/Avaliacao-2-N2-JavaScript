function diferencaRaizes(a, b) {
    function Raiz(r) {
        return Math.sqrt(r);
    }
    return Raiz(a) - Raiz(b);
}
dr = diferencaRaizes(25, 9);
console.log("A diferença das raízes selecionadas é igual a " + dr + ".")
