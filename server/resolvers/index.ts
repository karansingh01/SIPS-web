const userResolvers = require('./users');
const drinksResolvers = require('./drinks');

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...drinksResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...drinksResolvers.Mutation,
    },
};