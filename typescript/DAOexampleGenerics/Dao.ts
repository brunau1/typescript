import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T>{
	
	nomeTabela: string = ''
	
	insert(object: T) : boolean {
		console.log('lógica insert')
		return true

	}
	update(object: T) : boolean {
		console.log('lógica update')
		return true
	}
	delete(id: number) : T {
		console.log('logica delete')
		return Object()
	}
	select(id: number) : T {
		console.log('logica select')
		return Object()
	}
	selectAll() : [T] {
		console.log('select all')
		return [Object()]
	}
}