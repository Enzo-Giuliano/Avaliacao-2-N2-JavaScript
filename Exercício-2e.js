let pessoa = { nome: "Marcos",
               sobrenome: "Vilar",
               idade: 51,
               tecnico: "química",
               especializacao: "plásticos",
               esposa: "Sirlene Izabel",
               filhos: 2, 
               identificacao: function() {
                   console.log("Olá, meu nome é " + this.nome + " " + this.sobrenome  + ", tenho " + this.idade + " anos, fiz curso técnico integrado em " + this.tecnico + " e sou especializado em " + this.especializacao + ". Tenho " + this.esposa + " como esposa, e tenho " + this.filhos + " filhos.");
              }
}
pessoa.identificacao();
