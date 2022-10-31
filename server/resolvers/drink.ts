const Drink = require('../model/drinks');


module.exports = {
    Mutation: {
        async createDrink(_: any, {drinkInput: {text, image, id} }: any) {
            const newDrink = new Drink({
                strDrink: text,
                strDrinkThumb: image,
                idDrink: id
            });

            const res = await newDrink.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            };
        }
    },
    Query: {
        Drink: (_: any, {ID}: any) => Drink.findById(ID)
    }
}