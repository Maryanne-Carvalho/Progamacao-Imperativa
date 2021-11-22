let nome ="Maryanne Lima Carvalho"

console.log(nome.length);

console.log(nome)
console.log(nome.trim());

console.log(nome.split(" "));

let lista = ["Maryanne", "Lima", "Carvalho", "Garcia", "Ciclano", 24, true]
console.log(lista[4]); //exibe uma posição especifico 1
lista[4] = "Novo"; //2
console.log(lista);
lista.push("Teste", "teste1",15, 78);//adiciona no fim 
console.log(lista)
let x = lista.pop();//elimina o ultimo
console.log(lista);
let y = lista.shift();//elimina o primeiro
console.log(lista)
lista.unshift("Mary", y)//adiciona no inicio da lista
console.log(lista)

let strLista= lista.join(" - ");//pega uma Array(lista) e transforma numa string
console.log(strLista);

lista.push("Mary")
console.log(lista);
console.log(lista.lastIndexOf("Mary"))
console.log(lista.includes("Mary"))
 lista[0] = novoArray [0]