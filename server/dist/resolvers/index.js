"use strict";
const messagesResolvers = require('./messages');
const userResolvers = require('./users');
const recipeResolvers = require('./recipe');
const drinksResolvers = require('./drinks');
module.exports = {
    Query: Object.assign(Object.assign(Object.assign({}, messagesResolvers.Query), userResolvers.Query), drinksResolvers.Query),
    Mutation: Object.assign(Object.assign(Object.assign({}, messagesResolvers.Mutation), userResolvers.Mutation), drinksResolvers.Mutation),
};
