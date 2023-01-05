/* Os namespaces são uma maneira específica do TypeScript de organizar o código. 
Namespaces são simplesmente nomeados como objetos JavaScript no namespace global. 
Isso torna os namespaces em um construct muito simples de usar. 
Ao contrário dos módulos, eles podem abranger vários arquivos e podem ser concatenados usando outFile. */ 

//Namespace

/* namespace Geometria {
    export namespace Area {
        const PI = 3.14;

        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2);
        }

        export function retangulo(base: number, altura: number): number {
            return base * altura;
        }
    }
}

console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20)); */


//módulos
/* export - exporta a classe para ser utilizada em outro arquivo
import - importa a classe de outro arquivo */