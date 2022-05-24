const express = require("express");
const UserModel = require("../src/models/user.model");
const PORT = 8080;
const app = express();
app.use(express.json());

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

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).end(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Rodando server com Express na porta ${PORT}`);
});
