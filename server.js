const express = require('express');
const { exec } = require('child_process');
const app = express();
const fs = require('fs');

const commands = JSON.parse(fs.readFileSync('commands.json'));


// deepcode ignore NoRateLimitingForExpensiveWebOperation: Should not be port forwarded
app.get('/*', (req, res) => {
    const key = req.path.split("/")[1];
    console.log(`Received: ${key}`);
    if (key in commands) {
        const command = commands[key];
        console.log(`Executing command: ${command}`);
        const { exec } = require('child_process');
        // deepcode ignore CommandInjection: Commands are from a file and can only be changed by host
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error}`);
                return;
            }
            console.log(`Command output: ${stdout}`);
        });
    }
    res.sendStatus(200);
});

app.listen(8000);
