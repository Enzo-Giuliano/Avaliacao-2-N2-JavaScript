let carro = {marca: "Renault",
             modelo: "Sandero",
             ano: "2022",
             cor: "prata",
             idade: function() {
                 let anoAtual = prompt("Insira o ano atual: ");
                 let anoUso = anoAtual - this.ano;
                 console.log("O carro " + this.marca + " de modelo " + this.modelo + ", do ano de " + this.ano + ", de cor " + this.cor + ", tem " + anoUso + " anos de uso.")
             }
}
carro.idade();
