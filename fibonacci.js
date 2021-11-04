// Fibonacci
let numeros = [];
let i = 0;

while (numeros.length < 20) {
    let resultado;

    if(i == 0) {
        numeros.push(i);
    } else if(i == 1) {
        numeros.push(i);
    } else if(i > 1) {
        let num1 = numeros[i-1]; // antes/before NaN
        let num2 = numeros[i-2]; // antes/before undefined      
        resultado = num1 + num2;
        numeros.push(resultado);
    }

    i++;
}

console.log(numeros);



/*
i F
0 0 
1 1 
2 1 = 1 + 0
3 2 = 1 + 1
4 3 = 2 + 1
5 5 = 3 + 2
6 8 = 5 + 3
7 13 = 8 + 5
8 21 = 13 + 8
*/