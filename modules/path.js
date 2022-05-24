const path = require("path");


console.log(path.basename(__filename)); // nome do arquivo atual path.js
console.log(path.basename(__dirname)); // nome da pasta do arquivo atual modules
console.log(path.dirname(__filename));// caminho do diretorio do arquivo c:\Users\Guto1\Documents\Cursos\ProjetosNode\ProjetoBackendUm\modules
console.log(path.extname(__filename));// extensão do arquivo .js
console.log(path.parse(__filename));// mostra info do path como obj
console.log(path.join(__dirname, "teste", "teste.html")); // cria caminhos em String 
console.log(__dirname);
// c:\Users\user\Documents\Cursos\ProjetosNode\ProjetoBackendUm\modules\teste\teste.html