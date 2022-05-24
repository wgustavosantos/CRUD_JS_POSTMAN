const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, {
      "context-type": "text/html",
    });
    res.end("<h1>Home page.</h1>");
  }

  if (req.url === "/users") {
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
    res.writeHead(200, {
      "context-type": "application/json"
    });

    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na pota ${port}`));
