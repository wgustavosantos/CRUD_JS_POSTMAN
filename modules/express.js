const express = require("express");
const UserModel = require("../src/models/user.model");
const PORT = 8080;
const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello Word com NodeJs usando Express</h1>");
});



app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).end(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);


  } catch (error) {
    res.status(500).end(error.message);
  }
})

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message); // send pois é string e não json
  }
})

app.listen(PORT, () => {
  console.log(`Rodando server com Express na porta ${PORT}`);
});
