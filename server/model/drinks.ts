/*
EXAMPLE OF HOW WE COULD STORE DRINKS

import { models } from "mongoose";

const {model, Schema} = require('mongoose');



const drink = new Schema({

    name:String,
    description: String,
    favourite: Boolean,
    ingredients: String

})

models.exports = model('Drinks', drink); */