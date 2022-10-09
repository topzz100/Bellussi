import { gql } from '@apollo/client'

 const CREATE_USER = gql`
  mutation createUser(
    $firstname: String,
    $lastname: String,
    $email: String,
    $country: String,
    $phoneNumber: String,
    $password: String,
  ){
    createUser(
      userInput: {
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      country: $country,
      phoneNumber: $phoneNumber,
      password: $password,
    }){
      id
      firstname
      lastname
      email,
      country,
      phoneNumber,
      createdAt,
      token
    }
  }
`
const LOGIN_USER = gql`
  mutation login($email: String, $password: String,){
    login(email: $email, password: $password,
    ){
      id
      firstname
      lastname
      email,
      country,
      phoneNumber,
      createdAt,
      token
    }
  }
`
//  const CREATE_USER = gql`
//   mutation createUser( $userInput: UserInput ){
//     createUser( userInput: $userInput){
//       id
//       firstname
//       lastname
//       email,
//       country,
//       phoneNumber,
//       createdAt
//     }
//   }
// `

export { CREATE_USER, LOGIN_USER }
