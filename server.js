  
const express = require('express');
const helmet = require('helmet');

const server = express();
const projectRoute = require('./projectRouter.js');
const actionRoute = require('./actionRouter.js');

server.use(helmet());
server.use(logger);


server.get('/', (req, res) => {
    res.send(`<h1>Now we are cooking!</h1>`)
})

server.use('/api/project', projectRoute);
server.use('/api/action', actionRoute);

function logger(req, res, next){
    console.log(`Logged ${req.url} ${req.method} ${new Date()}`)
    next();
}


module.exports = server;