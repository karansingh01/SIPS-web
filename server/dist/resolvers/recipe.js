"use strict";
// const Recipe = require('../model/Recipe');
// module.exports = {
//     Query: {
//         async recipes(_: any, {ID}: any) {
//             // returns recipe based on ID
//             return await Recipe.findById(ID)
//         },
//         async getRecipes(_: any, {amount}: any) {
//             // returns array of recipes
//             return await Recipe.find().limit(amount);
//         }
//     },
//     Mutation: {
//         async createRecipe(_: any, {recipeInput: {name, description}}: any) {
//             const createdRecipe = new Recipe({
//                 name: name,
//                 description: description,
//                 createdAt: new Date().toISOString(),
//                 thumbsUp: 0,
//                 thumbsDown: 0,
//             });
//             const res = await createdRecipe.save();
//             return {
//                 ...res._doc,
//                 id: res.id
//             };
//         },
//         async deleteRecipe (_: any, {ID}: any) {
//             const wasDeleted = (await Recipe.deleteOne ({_id: ID})).deletedCount;
//             return wasDeleted;
//         },
//         async editRecipe (_: any, {ID, recipeInput: {name, description}}: any) {
//             const wasEdited = (await Recipe.updateOne ({_id: ID}, {name: name, description: description})).modifiedCount;
//             return wasEdited;
//         }
//     }
// }
