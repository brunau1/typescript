import { Dao } from './Dao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('','')

let dao: Dao<Concessionaria> = new Dao<Concessionaria>()

dao.insert(concessionaria)