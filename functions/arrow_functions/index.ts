//Arrow functions

/* São usadas para funções anônimas, ou seja, para expressões de função. Eles também são chamados de funções lambda.
Usando => eliminamos a necessidade de usar a palavra-chave function. 
Os parâmetros são passados ​​entre parênteses e a expressão da função é colocada entre chaves.
A função de seta tem escopo léxico da palavra-chave "this".

const arrowFunction = (parametro1: tipo1, parametro2: tipo2): tipoRetorno => {
    //corpo da função
}

const nomeArrow = () => "Thomaz Braum";

const add = (a: number, b: number): number => {
    return a + b;
}

const sub = (a: number, b: number): number => {
    return a - b;
} 

//se o corpo da função consistir em apenas uma instrução, não há necessidade de colchetes e a palavra-chave return pode ser omitida
const mult = (a: number, b: number): number => a * b;
const div = (a: number, b: number): number => a / b; */

//Podemos incluir a arrow function como uma propriedade em uma classe.

/* class Aluno {
    ra: number;
    nome: string;

    constructor(ra: number, nome: string) {
        this.ra = ra;
        this.nome = nome;
    }
    showDetails = () => {
        console.log(`RA: ${this.ra} - Nome: ${this.nome}`);
    }
}

const aluno = new Aluno(123456, "Adolfo");
aluno.showDetails(); */