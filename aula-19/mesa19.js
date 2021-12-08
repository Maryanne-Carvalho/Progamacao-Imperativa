const listaPessoas = require('./pessoas')

// a maior e a menor altura do grupo;
let menorAltura = Math.min.apply(Math, listaPessoas.map(function (x) {
    return x.altura; }))

let maiorAltura = Math.max.apply(Math, listaPessoas.map(function (x) {
    return x.altura; }))
console.log(`A menor altura é ${menorAltura}m e a maior é ${maiorAltura}m.`)

// a média de altura das mulheres;
let mulheres = listaPessoas.filter(mulher => mulher.sexo === 'F');

let mediaAlturaMulheres = (listaMulheres) => {
    let { length } = listaMulheres;
    return listaMulheres.reduce((x, y) => {
        return x + (y.altura / length);
    }, 0);
};
console.log(`A média de altura entre as mulheres é de ${mediaAlturaMulheres(mulheres).toFixed(2)}m.`)

// o número de homens.
let totalHomens = 0
for (i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].sexo === "M") {
        totalHomens++;
    }
}
console.log(`Há o total de ${totalHomens} homens.`)