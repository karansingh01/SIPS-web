"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('../model/User');
const { ApolloServer, UserInputError } = require('apollo-server');
const { ApolloError } = require('apollo-server-errors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports = {
    Mutation: {
        registerUser(_, { registerInput: { username, email, password } }) {
            return __awaiter(this, void 0, void 0, function* () {
                /* Do input validation
                if (!(email && password && first_name && last_name)) {
                    res.status(400).send("All input is required");
                }
                */
                const oldUser = yield User.findOne({ email });
                if (oldUser) {
                    throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXISTS');
                }
                var encryptedPassword = yield bcrypt.hash(password, 10);
                const newUser = new User({
                    username: username,
                    email: email.toLowerCase(),
                    password: encryptedPassword
                });
                const token = jwt.sign({ user_id: newUser._id, email }, "UNSAFESTRING", {
                    expiresIn: "2h",
                });
                newUser.token = token;
                const res = yield newUser.save();
                return Object.assign({ id: res.id }, res._doc);
            });
        },
        loginUser(_, { loginInput: { email, password } }) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield User.findOne({ email });
                if (user && (yield bcrypt.compare(password, user.password))) {
                    // Create token
                    const token = jwt.sign({ user_id: user._id, email }, "UNSAFESTRING", {
                        expiresIn: "2h",
                    });
                    // save user token
                    user.token = token;
                    return Object.assign({ id: user.id }, user._doc);
                }
                else {
                    throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
                }
            });
        }
    },
    Query: {
        user: (_, { ID }) => User.findById(ID)
    }
};
