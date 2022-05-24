const express = require("express");
const PORT = 8080;
const app = express();

app.get("/home", (req, res) => {
    res.contentType("application/html");
  res.status(200).send("<h1>Hello Word com NodeJs usando Express</h1>");
});

app.get("/users", (req, res) => {
    let users = [
        {
          name: "Wenderson Gustavo",
          email: "gustavo@gmail.com",
        },
        {
          name: "Joice Magalhaes",
          email: "joice@gmail.com",
        },
      ];
      res.status(200).json(users);
});


app.listen(PORT, () => {
    console.log(`Rodando server com Express na porta ${PORT}`);
})
