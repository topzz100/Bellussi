const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
  firstname: String,
  lastname: String
  email: String
  country: String
  phoneNumber: String,
  token: String
}
type Book {
  title: String
  author: String
}

input UserInput {
  firstname: String
  lastname: String
  email: String
  country: String
  phoneNumber: String
  password: String
}

type Query {
  books: [Book]
  users: [User]
}
type Mutation {
  createUser(userInput: UserInput): User
}
`;
module.exports = typeDefs