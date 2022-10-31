"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const drinksSchema = new mongoose_1.default.Schema({
    idDrink: Number,
    strDrink: String,
    strDrinkThumb: String,
    strGlass: String,
    strInstructions: String,
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strIngredient7: String,
    strIngredient8: String,
    strIngredient9: String,
    strIngredient10: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strMeasure6: String,
    strMeasure7: String,
    strMeasure8: String,
    strMeasure9: String,
    strMeasure10: String,
});
module.exports = mongoose_1.default.model('Drinks', drinksSchema);
