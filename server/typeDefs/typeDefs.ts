const { gql } = require('apollo-server');

module.exports = gql`

type Drinks {
  // Siden alle feltene i modellen har typer er det unødvendig å ha str først. Det er også fint å bruke så riktige typer som mulig. F.eks. kunne kanskje strAlcoholic vært en boolean. 
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
  // For ingredients og measurements ville jeg anbefalt lister. Ingredienser gjenbrukes også gjerne så for en bedre modell her kunne dere laget en egen type av ingrediens og referert til disse i hver oppskrift.
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


type Query {
  # takes a ID and returns a Drinks object
  drinks(ID: ID!): Drinks
  # takes an amount (example 5) and returns that many Drink objects in array
  getDrinks(amount: Int): [Drinks]
  # takes a name and returns info about that drink
  getDrinksByName(recipename: String): [Drinks]
  # returns all drinks
  getAllDrinks: [Drinks]
  # returns all drinks with a specific ingredient
  getDrinksByIngredient(ingredient: String): [Drinks]
  # returns drinks from a certain index
  getDrinksFromIndex(amount: Int, index: Int): [Drinks]
  # returns drinks if name contains in a certain alcohol type
  getDrinksByNameContains(recipename: String, ingredient: String): [Drinks]
  # returns drinks if name contains in anyalcohol type
  getDrinksByNameContainsAny(recipename: String): [Drinks]


  user(id: ID!): User 
}

type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`