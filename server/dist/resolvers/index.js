"use strict";
const messagesResolvers = require('./messages');
const userResolvers = require('./users');
module.exports = {
    Query: Object.assign(Object.assign({}, messagesResolvers.Query), userResolvers.Query),
    Mutation: Object.assign(Object.assign({}, messagesResolvers.Mutation), userResolvers.Mutation),
};
