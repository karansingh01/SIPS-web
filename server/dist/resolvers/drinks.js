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
const Drink = require('../model/Drinks');
module.exports = {
    Query: {
        drinks(_, { ID }) {
            return __awaiter(this, void 0, void 0, function* () {
                // returns recipe based on ID
                return yield Drink.findById(ID);
            });
        },
        getDrinks(_, { amount }) {
            return __awaiter(this, void 0, void 0, function* () {
                // returns array of recipes with limited amount
                return yield Drink.find().limit(amount);
            });
        },
        // returns array starting at a certain index
        getDrinksFromIndex(_, { amount, index }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Drink.find().skip(index).limit(amount);
            });
        },
        getDrinksByName(_, { recipename }) {
            return __awaiter(this, void 0, void 0, function* () {
                // returns array of recipes
                return yield Drink.find({ strDrink: recipename });
            });
        },
        getDrinksByNameContains(_, { recipename, ingredient }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Drink.find({ $or: [{ strIngredient1: ingredient }, { strIngredient2: ingredient }, { strIngredient3: ingredient }, { strIngredient4: ingredient }, { strIngredient5: ingredient }, { strIngredient6: ingredient }, { strIngredient7: ingredient }, { strIngredient8: ingredient }, { strIngredient9: ingredient }, { strIngredient10: ingredient }], strDrink: { $regex: recipename, $options: 'i' } });
                // returns array of recipes
            });
        },
        getDrinksByNameContainsAny(_, { recipename }) {
            return __awaiter(this, void 0, void 0, function* () {
                // returns array of recipes
                return yield Drink.find({ strDrink: { $regex: recipename, $options: 'i' } });
            });
        },
        getAllDrinks(_) {
            return __awaiter(this, void 0, void 0, function* () {
                // returns all recipes
                return yield Drink.find();
            });
        },
        getDrinksByIngredient(_, { ingredient }) {
            return __awaiter(this, void 0, void 0, function* () {
                // returns all recipes with a specific ingredient
                return yield Drink.find({ $or: [{ strIngredient1: ingredient }, { strIngredient2: ingredient }, { strIngredient3: ingredient }, { strIngredient4: ingredient }, { strIngredient5: ingredient }, { strIngredient6: ingredient }, { strIngredient7: ingredient }, { strIngredient8: ingredient }, { strIngredient9: ingredient }, { strIngredient10: ingredient }] });
            });
        }
    }
};
