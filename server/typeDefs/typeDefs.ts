const { gql } = require('apollo-server');

module.exports = gql`

type Drinks {
  idDrink: String
  strDrink: String
  strDrinkAlternate: String
  strTags: String
  strVideo: String
  strCategory: String
  strIBA: String
  strAlcoholic: String
  strGlass: String
  strInstructions: String
  strInstructionsES: String
  strInstructionsDE: String
  strInstructionsFR: String
  strInstructionsIT: String
  strDrinkThumb: String
  strIngredient1: String
  strIngredient2: String
  strIngredient3: String
  strIngredient4: String
  strIngredient5: String
  strIngredient6: String
  strIngredient7: String
  strIngredient8: String
  strIngredient9: String
  strIngredient10: String
  strIngredient11: String
  strIngredient12: String
  strIngredient13: String
  strIngredient14: String
  strIngredient15: String
  strMeasure1: String
  strMeasure2: String
  strMeasure3: String
  strMeasure4: String
  strMeasure5: String
  strMeasure6: String
  strMeasure7: String
  strMeasure8: String
  strMeasure9: String
  strMeasure10: String
  strMeasure11: String
  strMeasure12: String
  strMeasure13: String
  strMeasure14: String
  strMeasure15: String
  strImageSource: String
  strImageAttribution: String
  strCreativeCommonsConfirmed: String
  dateModified: String
}

type Recipe {
  name: String,
  description: String,
  createdAt: String,
  thumbsUp: Int,
  thumbsDown: Int,
}

input RecipeInput {
  name: String,
  description: String,
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
  # takes a ID and returns a Drinks object
  drinks(ID: ID!): Drinks
  # takes an amount (example 5) and returns that many Drink objects in array
  getDrinks(amount: Int): [Drinks]
  # takes a name and returns info about that drink
  getDrinksByName(recipename: String): [Drinks]

  message(id: ID!): Message
  user(id: ID!): User 
}
type Mutation {
    createMessage(messageInput: MessageInput): Message!
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`