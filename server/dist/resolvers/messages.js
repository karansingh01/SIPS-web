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
const Message = require('../model/Message');
module.exports = {
    Mutation: {
        createMessage(_, { messageInput: { text, username } }) {
            return __awaiter(this, void 0, void 0, function* () {
                const newMessage = new Message({
                    text: text,
                    createdBy: username,
                    createdAt: new Date().toISOString()
                });
                const res = yield newMessage.save();
                console.log(res);
                return Object.assign({ id: res.id }, res._doc);
            });
        }
    },
    Query: {
        message: (_, { ID }) => Message.findById(ID)
    }
};