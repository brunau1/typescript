import ConcessionariaDao from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import PessoaDao from './PessoaDao'
import Pessoa from './Pessoa'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('',[])

dao.insert(concessionaria)

let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa('','')

dao2.update(pessoa)