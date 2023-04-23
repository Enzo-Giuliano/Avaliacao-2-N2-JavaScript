function retusuario() {
    return "Bem-vindo(a) devolta, ";
}
function saudar(bemvi, nome){
    console.log(bemvi() + nome + ".");
}
saudar(retusuario, "Paulo");
