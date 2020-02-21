const express = require('express');
const recipeRouter = require('./recipes/recipeRouter.js');

const server = express();
server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
    res.send('<h2> We be Migratin and Seeding in this beezy </h2>');
});

module.exports = server;