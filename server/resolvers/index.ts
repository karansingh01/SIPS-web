const messagesResolvers = require('./messages');
const userResolvers = require('./users');
const recipeResolvers = require('./recipe');
const drinksResolvers = require('./drinks');

module.exports = {
    Query: {
        ...messagesResolvers.Query,
        ...userResolvers.Query,
        ...drinksResolvers.Query,
    },
    Mutation: {
        ...messagesResolvers.Mutation,
        ...userResolvers.Mutation,
        ...drinksResolvers.Mutation,
    },
};