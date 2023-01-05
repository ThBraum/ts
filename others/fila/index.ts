//Classe Fila
/* class Fila<T extends number | string> {
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(elemento: T) {
        this.fila.push(elemento);
    }

    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }

        return null;
    }

    imprimir() {
        console.log(this.fila);
    }
}

const fila = new Fila<string>('Adolfo', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Braum');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir(); */
