let composto = [2, 4 ,8, 16, 32, 64];

function dividindo (array) {
let todos = composto.reduce(function(total, numero){
    return total + numero;
});
let matriz = composto.map(function(item){
    return item / todos;
})
console.log(matriz);

}

dividindo(composto)

let palavrasNumeros = ["Discord", "Zoom", "Playground", "Checkpoint", "Exercício", 7];

function separando(array){
    let maioresQue = array.filter(function(palavras){
        return palavras.length > array[5];});

    console.log(maioresQue);
        
};

separando(palavrasNumeros);