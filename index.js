const express = require('express')
var requirejs = require('requirejs');
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

const path = require('path');
const app = express()
const port = process.env.PORT || 8080;

const { StartGame, GetGameState } = require("./GameServer/gameRunner.js")

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/Diacritics'));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/Generator', function(req, res) {
    res.sendFile(path.join(__dirname, '/Generator/generator.html'));
});

app.get('/Chosen', function(req, res) {
    res.sendFile(path.join(__dirname, '/Chosen/chosen.html'));
});

app.get('/Game', function(req, res) {
    res.sendFile(path.join(__dirname, '/Game/game.html'));
});

gameRunner = require("./GameServer/gameRunner.js");

app.post('/Game/start', (req, res) => {
    gameRunner.StartGame()
    res.send('Game started')
})

app.post('/Game/input', (req, res) => {
    data = req.body.data
    res.send(`Received input ${data}`)
    gameRunner.SendInput(data)
})

app.get('/Game/state', (req, res) => {
  res.send({"res":GetGameState()})
})

app.listen(port);
console.log('Server started at http://localhost:' + port);