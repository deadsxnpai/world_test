const { ApolloServer } = require('apollo-server-express');
const { ServiceBroker } = require('moleculer');

const express = require('express');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const studentsService = require('../services/students.service');
const transcriptsSerice = require('../services/transcripts.service')
const subjectsService = require('../services/subjects.service')
const ratingsService = require('../services/ratings.service')

const port = 3000
const broker = new ServiceBroker();

async function start() {
    const app = express();

    broker.createService(studentsService);
    broker.createService(transcriptsSerice);
    broker.createService(subjectsService);
    broker.createService(ratingsService);
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => ({ req, broker }),
      });

    await server.start();
    server.applyMiddleware({ app });

    broker.start().then(() => {
        app.listen(port, () => {
            console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
        });
    });
   
}
module.exports = {
    start,
    broker
}