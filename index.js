const express = require("express");
const server = express();

server.use(express.json());
const jogos = ["Persona 5", "Assassin's Creed Black Flag", "Metal Gear Solid V"];

server.get("/jogos/:index", (req, res) => {
    const {index} = req.params;
    return res.json(jogos[index]);
});

server.get("/jogos", (req, res) => {
    return res.json(jogos);
});

server.post("/jogos", (req, res) => {
    const {name} = req.body;
    jogos.push(name);
    return res.json(jogos);
});

server.put("/jogos/:index", (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    jogos[index] = name;
    return res.json(jogos);
});

server.delete("/jogos/:index", (req, res) => {
    const {index} = req.params;
    jogos.splice(index, 1);
    return res.json({message: "O jogo foi excluído"});
});

server.listen(3040);