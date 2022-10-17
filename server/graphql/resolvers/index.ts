

import { UserMutation, UserQueries, UserSubscription } from './user';

const rootResolver = {
  Query: {
    ...UserQueries
    // Add other queries here
  },
  Mutation: {
    ...UserMutation
    // Add other mutations here
  },
  Subscription: {
    ...UserSubscription
    // Add other subscriptions here
  }
};



/* import { ReferencedFieldsForType } from "apollo-reporting-protobuf";




const Drink = require('../models/drinks'); 

module.exports = {
Query: {
    async Drink(_: any,{ID}: any) {
        return await Drink.findById(ID)
    },
    async getDrink(_:any,{amount}){
        return await Drink.find().sort({
            createdAt: -1}).limit(amount)
    }
},
Mutation: {

}

} */