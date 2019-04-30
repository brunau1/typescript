export interface DaoInterface<T>{

	nomeTabela: string

	insert(object: T) : boolean
	update(object: T) : boolean
	delete(id: number) : T
	select(id: number) : T
	selectAll() : [T]
}