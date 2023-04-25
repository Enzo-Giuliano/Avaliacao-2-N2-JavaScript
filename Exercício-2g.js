function soman(n) {
    if(n < 2) return 1; 
       return n+soman(n-1);
}
console.log("A soma de 1 até o número N é: " + soman(10));
