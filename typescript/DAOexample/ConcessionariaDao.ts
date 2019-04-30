import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export default class ConcessionariaDao implements DaoInterface {

	nomeTabela: string = 'tb_concessionaria'
	
	insert(object: Concessionaria) : boolean {
		console.log('lógica insert')
		return true

	}
	update(object: Concessionaria) : boolean {
		console.log('lógica update')
		return true
	}
	delete(id: number) : Concessionaria {
		console.log('logica delete')
		return new Concessionaria('',[])
	}
	select(id: number) : Concessionaria {
		console.log('logica select')
		return new Concessionaria('',[])
	}
	selectAll() : [any] {
		console.log('select all')
		return [new Concessionaria('',[])]
	}
}