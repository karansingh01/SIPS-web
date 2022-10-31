const { gql } = require('apollo-server');

module.exports = gql`


"All drinks"
  type drinks {
    idDrink: ID!
    strDrink: String!
    strDrinkThumb: String!
}

type oneDrink{
        idDrink: String!{
            strDrink: String!
            strCategory: String!
            strAlcoholic: String!
            strGlass: String
            strInstructions: String
            strIngredient1: String!
            strIngredient2: String
            strIngredient3: String
            strIngredient4: String
            strIngredient5: String
            strIngredient6: String
            strIngredient7: String
            strIngredient8: String
            strIngredient9: String
            strIngredient10: String
            }
        }

type Message {
    text: String
    createdAt: String
    createdBy: String
}

type User {
  username: String
  password: String
  email: String
  token: String
}

input RegisterInput {
  username: String
  email: String
  password: String
}

input LoginInput {
  email: String
  password: String
}

input MessageInput {
    text: String
    username: String
}
type Query {
    message(id: ID!): Message
    user(id: ID!): User 
}
type Mutation {
    createMessage(messageInput: MessageInput): Message!
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`