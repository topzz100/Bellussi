const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
  id: ID
  firstname: String
  lastname: String
  email: String
  country: String
  phoneNumber: String
  createdAt: String
  token: String
}
type Book {
  title: String
  author: String
}

type Product {
  id: ID
  title: String
  desc: String
  image: String
  size: [String]
  color: [String]
  category: [String]
  price: Float
  createdAt: String
  updatedAt: String
}

input UserInput {
  firstname: String
  lastname: String
  email: String
  country: String
  phoneNumber: String
  password: String
}

input ProductInput{
  title: String
  desc: String
  image: String
  size: [String]
  color: [String]
  category: [String]
  price: Float
}

input ProductUpdate{
  id: ID
  title: String
  desc: String
  image: String
  size: [String]
  color: [String]
  category: [String]
  price: Float
}

type Query {
  books: [Book]
  users: [User]
  getProducts: [Product]
}
type Mutation {
  createUser(userInput: UserInput): User
  createProduct(productInput: ProductInput): Product
  updateProduct(productInput: ProductUpdate): Product
  login(email: String, password: String): User
}
`;
module.exports = typeDefs