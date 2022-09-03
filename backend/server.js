const express = require('express')
const http = require('http')
const colors = require('colors')
require('dotenv').config()
const connectDB = require('./config/db')
const { ApolloServer, gql } = require('apollo-server-express')
const { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginDrainHttpServer } = require('apollo-server-core')

const typeDefs = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/index')
//connectDB()

async function startApolloServer(){
  const app = express()
  const port = process.env.PORT || 4000
const httpServer = http.createServer(app)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),

  ],
});
await connectDB()
await server.start()
server.applyMiddleware({
  app,
  path: '/'
});
await new Promise(resolve => httpServer.listen({ port: port }, resolve));
console.log(`server ready at http: //localhost:${port}${server.graphqlPath}`)


}
startApolloServer() 