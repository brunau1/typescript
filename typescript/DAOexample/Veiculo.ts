export default class Veiculo {

	protected modelo: string
	protected velocidade: number = 0

	public acelerar() : void {
		this.velocidade += 10
	}
	public parar() : void {
		this.velocidade = 0
	}
	public valocidadeAtual() : number {
		return this.velocidade
	}
	
}
