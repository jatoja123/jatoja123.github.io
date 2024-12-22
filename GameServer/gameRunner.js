const { spawn } = require('child_process');

function StartGame(){
    num = 10
    runPythonScript('compute.py', [num], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Factorial of ${num} is ${result}`);
        }
    })
}


function runPythonScript(scriptPath, args, callback) {
    const pythonProcess = spawn('py', [scriptPath].concat(args));
 
    let data = '';
    pythonProcess.stdout.on('data', (chunk) => {
        data += chunk.toString(); // Collect data from Python script
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
            callback(null, data);
        }
    });
}

module.exports = {
    StartGame
};