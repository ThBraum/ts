//Mapa
/* class Mapa<T> {
    itens: { chave: string; valor: T }[] = [];

    obter(chave: string): T | null {
        const resultado = this.itens.filter((i) => i.chave === chave);
        return resultado ? resultado[0].valor : null;
    }

    colocar(par: { chave: string; valor: T }) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }

        this.itens.push(par);
    }

    limpar() {
        this.itens = [];
    }

    imprimir() {
        console.log(this.itens);
    }
}

const mapa = new Mapa<number>();
mapa.colocar({ chave: 'Adolfo', valor: 27 });
mapa.colocar({ chave: 'Ana', valor: 25 });
mapa.colocar({ chave: 'Lu', valor: 2 });
mapa.imprimir();
mapa.limpar();
mapa.imprimir(); */