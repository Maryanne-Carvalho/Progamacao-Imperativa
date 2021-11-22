//MICRO DESAFIO 
let produtos = ["Arroz", "Feijão", "Tomate", "Peixe"]

let jProdutos = produtos.join(" - ")
console.log(jProdutos)

let x = produtos.pop();//elimina o ultimo e pega pra nova variavel
console.log(produtos);

produtos.push("Carne", "Leite", "Batata")//adiciona mais informações pra Array
console.log(produtos);

let y = produtos.shift();//elimina o primeiro e pega pra nova variavel
console.log(y);

produtos.unshift("Arroz integral")//Adiciona no inicio da lista
console.log(produtos);

//Mesa de trabalho
let comprar = ["Maça", "Banana", "Uva"]
// Acessar elementos específicos de um array.
console.log(comprar[2])
//Modificar cada um dos elementos de um array e imprimi-los no console
comprar[0]="Abacate"
comprar[1]="Couve"
comprar[2]="Cenoura"
console.log(comprar)
//Adicionar elementos a um array.
comprar.push("Morango", "Maracujá")
console.log(comprar)
//Extrair elementos de um array.
let tirar = comprar.pop()
console.log(comprar)
//Comparar elementos de um array com os elementos de outro.
console.log( comprar[0].includes(comprar[1]));

//O que esses códigos retornam?
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
//undefined
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
//Spiderman
let str = "una string qualquer";
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]);
//Uma string qualquer

//Array inverso
var alunos = ["Ana", "Beatriz", "João", "Maria"];

function imprimirInverso() {
    return alunos.reverse();
}
console.log(alunos.reverse())
//Array invertido
var dia = [1, 2, 3, 4, 5];

function inverter() {
    return dia.reverse();
}

console.log(dia.reverse())

//somarArray()
function somarArray(numero){
    let soma = 0;
    soma += numero.pop();
    soma += numero.pop();
    soma += numero.pop();
    soma += numero.pop();
    return soma;
}

console.log(somarArray([27 , 25, 30, 40]));

//Simulação Array.join()
function join(umArray){
    let concat = '';

    concat += umArray[0];
    concat += umArray[1];
    concat += umArray[2];
    return concat;
}

console.log(join(['S', 'O', 'S']));

//Coleções de Filmes (e mais…) 1
const filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
console.log(filmes[0]);

//Coleções de Filmes (e mais…) 2
function Maiuscula(arrayModificar){
    const arrayMaiuscula = arrayModificar.map(arrayModificar => arrayModificar.toUpperCase());
    return arrayMaiuscula;
}

console.log(Maiuscula(filmes));
//Coleções de Filmes (e mais…) 3
const Animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function juntarArrays(array1, array2){
    const arrayConcat = array1.concat(array2);
    return arrayConcat
}

console.log(juntarArrays(filmes, Animacao));

//Coleções de Filmes (e mais…) 4
let xy = Animacao.pop();
console.log(Animacao);
console.log(xy);
//Coleções de Filmes (e mais…) 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

console.log(asiaScores.join('|'));
console.log(euroScores.join('|'));

if (asiaScores.join('|') === euroScores.join('|')) {
	console.log('São iguais.');
} else {
	console.log('São diferentes.');
}


console.log(asiaScores.join('|'));
console.log(euroScores.join('|'));

if (asiaScores.join('|') === euroScores.join('|')) {
	console.log('São iguais.');
} else {
	console.log('São diferentes.');
}








