// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 10;
let numberTwo = 15;

const sum = numberOne + numberTwo;

alert(`A soma dos dois números é ${sum}`);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNumber = 20;

if (typeof isNumber == 'number') {
    alert("É um número");
} else {
    alert("Não é um número");
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = 'A';

if (typeof isString == 'string') {
    alert("É um string");
} else {
    alert("Não é um string");
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = false;

if (typeof isBoolean == 'boolean') {
    alert("É um boolean");
} else {
    alert("Não é um boolean");
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numberOne = 10;
let numberTwo = 5;

const sub = numberOne - numberTwo;

alert(`A subtração dos dois números é ${sub}`);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberOne = 10;
let numberTwo = 10;

const mult = numberOne * numberTwo;

alert(`A multiplicação dos dois números é ${mult}`);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numberOne = 15;
let numberTwo = 15;

const div = numberOne / numberTwo;

alert(`A divisão dos dois números é ${div}`);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numberPar = 6;

if (numberPar % 2 == 0) {
    alert("É um número par");
} else {
    alert("Não é um número par");
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numberImpar = 1;

if (numberImpar % 2 != 0) {
    alert("É um número ímpar");
} else {
    alert("Não é um número ímpar");
}
