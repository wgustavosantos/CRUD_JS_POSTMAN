const fs = require("fs");
const path = require("path");

//console.log(path.dirname(__filename));
console.log(__dirname);
//console.log(path.join(path.dirname(__filename), "teste"));
// fs.mkdir(path.join(__dirname, "teste"), (error) => { //função callback
//     if(error){
//        return console.log("Erro: ", error);
//     }

//     console.log("Pasta criada com sucesso");
// } );

/*Args do join -> path/caminho, pasta especfica dentro do path/caminho, nome do arquivo
    args do writeFile -> path full, conteudo do arquivo */
// fs.writeFile(path.join(__dirname, "teste", "teste.txt"), "Hello, world", (error) => {
//     if(error){
//         return console.log("Erro: ", error);
//     } else 
//     console.log("Arquivo criado com sucesso!");

// });

/* Modificando arquivos */
fs.appendFile(path.join(__dirname, "teste", "teste.txt"), "\nHello World adicionado", (error) => {
    if(error){
        return console.log("Erro: ", error);
    }else{
        console.log("Arquivo modificado com sucesso.");
    }

});

fs.readFile(path.join(__dirname, "teste", "teste.txt"), "utf-8", (error, data) => {

    if(error){
        console.log("Erro: ", error);
    }
    console.log(data);
})