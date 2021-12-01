function FizzBuzz(num1, num2) {
    for(var count=1; count<=100; count++) {
    console.log(count);
    if (count % num1 == 0){
         console.log("Fizz");
    } else if (count % num2 == 0) {
        console.log("Buzz");
    } else if (count % num1 == 0 && count % num2 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Nenhuma das opções")
    }
}}

FizzBuzz(2,5)

