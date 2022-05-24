const { Person } = require("./person");
const dotenv = require("dotenv");   //estabelecer conexão com o bd
let person = new Person("Gustavo");
const connectToDatabase = require("./src/database/connect");
dotenv.config(); //Para acessar variaveis de ambiente  
require("./modules/express");
connectToDatabase();
//require("./modules/http");
//require("./modules/fs") //importando arquivo e executando 
//console.log(person.sayMyName());


