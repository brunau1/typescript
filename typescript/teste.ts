let array : number[] = new Array(23,44,56,78,43,66)

//tuplas 

let endereco : [string, number] = ['Rua Olivera Melo', 120]
endereco.push('Rua Olegario maciel', 790)

//console.log(endereco)

//enum

enum Cores{
    red, // 0
    green, // 1
    blue // 2 
}

let cor : Cores = Cores.blue
//console.log(cor)

//objeto
//alias

type Funcionario = {
    supervisores : string[],
    baterPonto: (horas : number) => string 
}

let funcionario : Funcionario = {
    supervisores: ['Ana', "Fernando"],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return "Ponto normal"
        }
        else{
            return "Fora do horario"
        }
    }
}

//console.log(funcionario.supervisores)
//console.log(funcionario.baterPonto(7))

// union types - mais de um tipo para uma mesma variavel

let nota: number | string = 10
//console.log(nota)
nota = '10'
//console.log(nota)

// tipo nulo 

type Contato = {
    nome: string,
    tel1: string,
    tel2: null | string // opcioal
} 

let contato : Contato = {
    nome: "Bruno",
    tel1: "873298835",
    tel2: null
}

console.log(contato.nome)
console.log(contato.tel1)
console.log(contato.tel2)