import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export default class PessoaDao implements DaoInterface {

	nomeTabela: string = 'tb_Pessoa'
	
	insert(object: Pessoa) : boolean {
		console.log('lógica insert')
		return true

	}
	update(object: Pessoa) : boolean {
		console.log('lógica update')
		return true
	}
	delete(id: number) : Pessoa {
		console.log('logica delete')
		return new Pessoa('','')
	}
	select(id: number) : Pessoa {
		console.log('logica select')
		return new Pessoa('','')
	}
	selectAll() : [any] {
		console.log('select all')
		return [new Pessoa('','')]
	}
}