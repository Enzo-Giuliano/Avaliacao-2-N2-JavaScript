//Função Construtora

function Livro(nome, autor, ano) {
    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
    this.informacoes = function() {
        console.log("O nome do livro é " + this.nome + ", do autor " + this.autor + ", do ano de " + this.ano + ".");
    };
}

//Objetos (Livro)

let livro1 = new Livro("Clara dos Anjos", "Lima Barreto", 1948);
let livro2 = new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881);

//Método Informações

livro1.informacoes();
livro2.informacoes();
