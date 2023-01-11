const express = require('express');
const apisRoutesProcess = require('./process.fork/app.routers.fork');
const cluster = require('cluster');
const os = require('os');
const config = require('./config');

const PORT = process.argv[2] || 8080;

const app = express();

app.use('/api', apisRoutesProcess);

//Muestra servidor
app.get('/datos', (req, res) => {    
    const html = 
      `Servidor express <span style="color: coral; font-weight: bold;">(NginX)</span> | ${PORT} - <b>PID => ${process.pid}</b> - ${new Date().toLocaleString()}`
    res.send(html);  });

const clusterMode = process.argv[3] === "CLUSTER";

if (clusterMode && cluster.isPrimary){            
    const NUM_WORKERS = os.cpus().length; //cantidad de nucleos
    for (let i = 0; i < NUM_WORKERS; i++){
        cluster.fork();
    }
}else{         
    app.listen(PORT, config.HOST,() =>{
        console.log(`Server listening on http://${config.HOST}:${PORT}`);
    })
}

