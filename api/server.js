// src/api/server.js
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const cors = require('cors')
const port = 3000

async function start() {
    const app = express();
    
    app.use(cors())
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
  
    await server.start();
    server.applyMiddleware({ app });

    app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
});
  
}
module.exports = start()