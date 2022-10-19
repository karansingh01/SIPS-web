import { models } from "mongoose";

const {model, Schema} = require('mongoose');

// to be use in the future, look at testModel.ts

const drink = new Schema({

    name:String,
    description: String,
    favourite: Boolean,
    ingredients: String

})

models.exports = model('Drinks', drink);