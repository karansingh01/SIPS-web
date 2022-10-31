const Drink = require('../model/Drinks');


module.exports = {
    Query: {
        async drinks(_: any, {ID}: any) {
            // returns recipe based on ID
            return await Drink.findById(ID);
        }, 
        async getDrinks(_: any, {amount}: any) {
            // returns array of recipes
            return await Drink.find().limit(amount);
        },
        async getDrinksByName(_: any, {recipename}: any) {
            // returns array of recipes
            return await Drink.find({strDrink: recipename});
        },
    }
}