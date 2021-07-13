const express = require('express')
const { spawn } = require('child_process');
const open = require('open')
const app = express()
const port = 5000
function download(name) {
  if (name && name !=='') {
    var link = document.createElement('a');
    link.download = name;
    link.href ="file.png";  
    link.click();
  }
}

app.get('/login', (req, res) => {
    const { email, password, url } = req.query
var dataToSend;
    try {
        const python = spawn('python', ['./scripts/main.py', email,password,url]);
        python.stdout.on('data', (data) => {
            dataToSend = data.toString();
        });
        python.on('close', (_) => {
            res.send(dataToSend)
//             open(dataToSend, function (err) {
//                 res.send("Downloading:")
//   if ( err ) throw err;    
// });
            

        });
    }
    catch (e) {
        console.log(object);
    }
 
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))