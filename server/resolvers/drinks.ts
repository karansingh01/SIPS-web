const Drink = require('../model/Drinks');


module.exports = {
    Query: {
        async drinks(_: any, {ID}: any) {
            // returns recipe based on ID
            return await Drink.findById(ID);
        }, 
        async getDrinks(_: any, {amount}: any) {
            // returns array of recipes with limited amount
            return await Drink.find().limit(amount);
        },
        async getDrinksByName(_: any, {recipename}: any) {
            // returns array of recipes
            return await Drink.find({strDrink: recipename});
        },
        async getAllDrinks(_: any) {
            // returns all recipes
            return await Drink.find();
        },
        async getDrinksByIngredient(_: any, {ingredient}: any) {
            // returns all recipes with a specific ingredient
            return await Drink.find({$or: [{strIngredient1: ingredient}, {strIngredient2: ingredient}, {strIngredient3: ingredient}, {strIngredient4: ingredient}, {strIngredient5: ingredient}, {strIngredient6: ingredient}, {strIngredient7: ingredient}, {strIngredient8: ingredient}, {strIngredient9: ingredient}, {strIngredient10: ingredient}]});
        }
    }
}