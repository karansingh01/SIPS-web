"use strict";
const userResolvers = require('./users');
const drinksResolvers = require('./drinks');
module.exports = {
    Query: Object.assign(Object.assign({}, userResolvers.Query), drinksResolvers.Query),
    Mutation: Object.assign(Object.assign({}, userResolvers.Mutation), drinksResolvers.Mutation),
};
