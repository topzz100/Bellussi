const { UserInputError } = require('apollo-server-core');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
];
// const user = []

const generateToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  Query: {
    books: () => books,
    users: async() =>{
      const allUsers = await User.find()
      return allUsers
    }
  },
  Mutation: {
   async createUser(_, {userInput: {
      firstname, 
      lastname,
      email,
      country,
      phoneNumber,
      password
    }}){
      const existingUser = await User.findOne({email})
      if(existingUser){
        throw new UserInputError('user already exists')
      }
      //hash password
      hashedPassword = await bcrypt.hash(password, 12)
      const newUser = new User({
        firstname,
        lastname,
        email,
        country,
        phoneNumber,
        password: hashedPassword
      })

      const res = await newUser.save()
      const token = generateToken(res._id)
      return {
        id: res._id,
        ...res._doc,
        token
      }
    }
  }
}


