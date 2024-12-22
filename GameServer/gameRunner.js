const { spawn } = require('child_process');
index = require("../index.js");

function StartGame(){
    gra1 = ""
    gra2 = ""
    runPythonScript('GameServer/main.py', [gra1, gra2], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Odpalono gre pomyślnie");
        }
    })
}

const stream = require('stream');
let gameOutput = "not started"
let pythonProcess = null
let pythonStdin = null

function GetGameState() {
    return gameOutput
}

function runPythonScript(scriptPath, args, callback) {
    pythonProcess = spawn('py', [scriptPath].concat(args));
 
    pythonProcess.stdout.on('data', (chunk) => {
        gameOutput = chunk.toString(); // Collect data from Python script
        console.log(`Output: ${chunk.toString()}`)
    });
 
    pythonProcess.stderr.on('data', (error) => {
        console.error(`stderr: ${error}`);
    });
 
    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.log(`Python script exited with code ${code}`);
            callback(`Error: Script exited with code ${code}`, null);
        } else {
            console.log('Python script executed successfully');
            callback(null, gameOutput);
        }
    });
}

function SendInput(playerInput) {
    if (!pythonProcess) {
        return;
    }

    playerInput.forEach(element => {
        if(element < 'a' || element > 'z') return;
    });

    pythonProcess.stdin.write(playerInput + "\n");
    console.log(`Read input.`);
}

module.exports = {
    StartGame,
    GetGameState,
    SendInput
};