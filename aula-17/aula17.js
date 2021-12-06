let numeros = [1,5,9,3,5,7];

let dobro = numeros.map(function(item) {
    console.log(item);
    return item * 2
})

console.log(dobro)


let idades = [15,12,16,20,25,30,36]

let maiores = idades.filter(function(item) {
    console.log(item);
    return item >= 18;
})

console.log(maiores)

let total = idades.reduce(function(acumulador, item) {
    console.log(acumulador, item);
    return acumulador+item;
})
console.log(total)

let paises = ['Brasil', 'Cuba', 'Peru', 'India']
paises.forEach(function(item) {
    console.log("Olha que pais legal "+item)
})