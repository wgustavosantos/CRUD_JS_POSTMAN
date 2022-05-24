const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@nodejs-dicasparadev.sdfft.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error){
            console.log("Ocorreu um erro ao se conectar com o Banco de Dados: ", error);
        } else {
            console.log("Conexão ao banco de dados realizada com sucesso");
        }
    })
};

module.exports = connectToDatabase 