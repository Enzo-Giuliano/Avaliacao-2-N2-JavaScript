//Função Construtora

function Livro(nome, autor, ano) {
    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
    this.informacoes = function() {
        console.log("O nome do livro é " + this.nome + ", do autor " + this.autor + ", do ano de " + this.ano + ".");
    };
}

//Objeto (Livro)

let livro1 = new Livro("Clara dos Anjos", "Lima Barreto", 1948);

//Método Informações

livro1.informacoes();
