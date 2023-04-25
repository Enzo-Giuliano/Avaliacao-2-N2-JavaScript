let animal = { nome: "Salsicha",
               especie: "Canis familiares"
};

let cachorro = {raca: "Dachshund", __proto__:animal}

console.log(cachorro.nome);
console.log(cachorro.especie);
console.log(cachorro.raca);

//Objetos Cães

let cao1 = Object.create(cachorro);
console.log(cao1.nome);
console.log(cao1.especie);
console.log(cao1.raca);

let cao2 = Object.create(cachorro);
console.log(cao2.nome);
console.log(cao2.especie);
console.log(cao2.raca);
