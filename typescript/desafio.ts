//converter para TS
/*let contaBancaria = {
    saldo: 3456,
    depositar(valor){
        this.saldo += valor
    }
}

let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890','98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)*/

//codigo em TS

type contaBancaria = {
    saldo : number,
    depositar : (valor : number) => void
}

type correntista = {
    nome : string,
    contaBancaria : contaBancaria,
    contatos : string[]
}

let cliente : correntista = {
    nome : 'Ana Silva',
    contaBancaria : {
        saldo : 3456,
        depositar(valor : number) : void {
            this.saldo += valor
        }
    },
    contatos: ['34567890','98765432']
}

cliente.contaBancaria.depositar(3000)
console.log(cliente)