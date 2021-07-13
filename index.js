const express = require('express')
const { spawn } = require('child_process');
const open = require('open')
const app = express()
const port = 5000
app.get('/login', (req, res) => {
    const { email, password } = req.query
    console.log(email,password);
var dataToSend;
    try {
        const python = spawn('python', ['./scripts/main.py', email,password]);
        python.stdout.on('data', (data) => {
            dataToSend = data.toString();
        });
        python.on('close', (_) => {
            open( dataToSend, function (err) {
  if ( err ) throw err;    
});
            res.send("Downloading")

        });
    }
    catch (e) {
        console.log(object);
    }
 
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))