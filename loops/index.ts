//Loops

/* A instrução for...in itera sobre as propriedades de string enumeráveis ​​de um objeto, 
enquanto a instrução for...of itera sobre os valores que o objeto iterável define para serem iterados.

for..in retorna uma lista de chaves no objeto que está sendo iterado, 
enquanto for..of retorna uma lista de valores das propriedades numéricas do objeto que está sendo iterado */

let iteravel = [10, 20, 30, 40, 50];

//iteravel.foo = "bar";
//console.log(iteravel); // [ 10, 20, 30, 40, 50, foo: 'bar' ]

//for loop
/* for (let i = 0; i < iteravel.length; i++) {
    console.log("for - value: ", iteravel[i], "index: ", i);
}

//for in loop
for (let key in iteravel) {
    console.log("in - value: ", iteravel[key], "index: ", key);
}

//for of loop
for (let value of iteravel) {
    console.log("of - value: ", value, "index: ", iteravel.indexOf(value));
}

//for of loop => Array.prototype.entries()
for(let [index, value] of iteravel.entries()) {
    console.log("of entries - value: ", value, "index: ", index);
}

//foreach loop
iteravel.forEach((value, index) => {
    console.log("foreach - value: ", value, "index: ", index);
});

let person = {
    name: 'Braum',
    age: 20
}; 

for (let key in person) {
    console.log("key: ", key, "value: ", person[key]);
}

//for of loop - entries
for (let [key, value] of Object.entries(person)) {
    console.log("key: ", key, "value: ", value);
} */

//for loop
/* for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

forEach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
}); */