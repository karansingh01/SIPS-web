import  express  from "express";
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express';
import mongoose  from 'mongoose';
import { resolvers } from './resolvers/TestResolver';
import { typeDefs } from './typeDefs/typeDefs';
import autoIncrement from 'mongoose-auto-increment'




const PORT=4000;

const startServer=async()=>
{
const app = express();


const allowedOrigins = [
'http://localhost:3000',
'http://localhost:3001',
'https://studio.apollographql.com'
];
const corsOptions = {
credentials: true,
  origin: function(origin, callback){
   if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}
app.use(cors(corsOptions))
const uri = "mongodb+srv://sips:sips123@sips.zjjstwz.mongodb.net/?retryWrites=true&w=majority";
// tror dette må gjøre om til å bruke cloud based varsjonenen siden tror man må laste ned MONGO DB på pcen for å få det til å funke akk nå

//@ts-ignore
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>console.log("connected to newmango db"))

// Drop the 'foo' collection from the current database
// mongoose.connection.db.dropCollection('apollo', function(err, result) {});

//   mongoose.connect(uri,function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });

const connection = mongoose.createConnection(uri);
autoIncrement.initialize(connection);



//rest routes
app.get("/", (req, res) => {
res.json({
    data: "API is working...",
  });
});


const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
}
startServer().catch(e=>console.log("error strting server======== ",e))




/* import { Request, Response, Application } from 'express';
const app = express();
app.set("port", 3000);

app.get('/', (req:any,res: any) => {
   res.send("Hello World");
});
app.listen(app.get("port"),() =>{
  console.log("App is running on http://localhost:d", app.get("port"))
 });
 */






/* 
 import { responsePathAsArray } from "graphql";
 import { log } from 'console';
 
 const uriGood: string = process.env.MONGO_DB_PATH as string;


 const {ApolloServer } = require('apollo-server');
 const mongoose = require('mongoose')
 
 
 const uri: string = "mongodb+srv://sips:sips123@sips.zjjstwz.mongodb.net/?retryWrites=true&w=majority";
 
const tyepDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
   tyepDefs,
   resolvers
});


 mongoose.connect(uri, {useNewUrlParser:true})
 .then(()=> {
console.log("wohoo monogoggodb");
return server.listen({port:5000});
})
.then((res:any) => {
   console.log(res.url)
});
 */