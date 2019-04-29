"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/*---- criando carros ----*/
var carroA = new Carro_1.default('mustang', 2);
var carroB = new Carro_1.default('camaro', 2);
var carroC = new Carro_1.default('fusca', 2);
var carroD = new Carro_1.default('impala', 4);
var carroE = new Carro_1.default('dodge viper', 2);
/*---- criando lista de carros ----*/
var listaDeCarros = [carroA, carroB, carroC, carroD, carroE];
var concessionaria = new Concessionaria_1.default("Av Barbados", listaDeCarros);
/*---- exibir a lista de carros ----*/
//console.log(concessionaria.mostrarListaDeCarros())
/*---- comprar o carro ----*/
var cliente = new Pessoa_1.default('Bruno', 'mustang');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
/*---- criando motos ----*/
var moto = new Moto_1.default();
moto.acelerar();
console.log(moto);
