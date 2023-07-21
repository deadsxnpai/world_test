const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors')
const { ServiceBroker } = require('moleculer');

const port = 4000;

const typeDefs = `
    type Student {
        id: ID!
        name: String!
        scores: [Int]!
    }

    type Query {
        students: [Student]
        student(id: ID!): Student
        studentRatings: [Student]
    }
`;
const resolvers = {
    Query: {
        students: async (_, __, { dataSources }) => {
            return await dataSources.students.getStudents();
        },
        student: async (_, { id }, { dataSources }) => {
            return await dataSources.students.getStudentById({ id });
        },
        studentRatings: async (_, __, { dataSources }) => {
            return await dataSources.students.getStudentRatings();
        },
    },
};

async function start() {
    const app = express();
    app.use(cors())
    
    const studentsService = new ServiceBroker({ nodeID: 'students-service' });
    studentsService.createService(require('./students.serivice'));
  
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        students: studentsService,
      }),
    });
  
    await server.start();
    server.applyMiddleware({ app });
  
    app.listen(port, () => {
      console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
}

start()
