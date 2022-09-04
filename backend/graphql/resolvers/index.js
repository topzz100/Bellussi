const usersResolvers = require('./user');
const productResolvers = require('./product')

module.exports = {
 
  Query: {
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...productResolvers.Mutation

  }

};