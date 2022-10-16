import { ApolloServer, gql } from 'apollo-server-express'

/* const {gql} = require('apollo-server');
 */

module.exports = gql`
type drink{
    name: String
    description: String
    favourite: Boolean
    ingredients: String
}

type Query{
    drink(ID: ID!): Drink!
    getDrink(amount:Int): [Drink]
}

type Mutation{
    addDrinks(drinkInput: DrinkInput): Drink!
    }
`
