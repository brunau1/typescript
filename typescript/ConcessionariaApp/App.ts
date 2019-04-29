import Carro, {} from './Carro'
import Moto, {} from './Moto'
import Concessionaria, {} from './Concessionaria'
import Pessoa, {} from './Pessoa'

/*---- criando carros ----*/

let carroA = new Carro('mustang', 2)
let carroB = new Carro('camaro', 2)
let carroC = new Carro('fusca', 2)
let carroD = new Carro('impala', 4)
let carroE = new Carro('dodge viper', 2)

/*---- criando lista de carros ----*/

let listaDeCarros : Array<Carro> /*Carro[]*/ = [carroA, carroB, carroC, carroD, carroE]

let concessionaria = new Concessionaria("Av Barbados", listaDeCarros)

/*---- exibir a lista de carros ----*/

//console.log(concessionaria.mostrarListaDeCarros())

/*---- comprar o carro ----*/

let cliente = new Pessoa('Bruno', 'mustang')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
	if(carro['modelo'] == cliente.dizerCarroPreferido())
		cliente.comprarCarro(carro)
})

console.log(cliente.dizerCarroQueTem())

/*---- criando motos ----*/

let moto = new Moto()
moto.acelerar()

console.log(moto)

console.log(concessionaria.fornecerHorariosDeFuncionamento())