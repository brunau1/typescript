interface DaoInterface{

	nomeTabela: string

	insert(object: any) : boolean
	update(object: any) : boolean
	delete(id: number) : any
	select(id: number) : any
	selectAll() : Array<any>
}