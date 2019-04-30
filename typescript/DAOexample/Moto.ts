import Veiculo, {} from './Veiculo'

export default class Moto extends Veiculo {
	/*---- metodo sobrescrito ----*/
	public acelerar() : void {
		this.velocidade += 20
	}
}
