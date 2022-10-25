import  express  from "express";
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express';
import mongoose  from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers');

const PORT = process.env.PORT || 3001;

const startServer=async()=>
{

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const uri = "mongodb+srv://sips:sips123@sips.zjjstwz.mongodb.net/?retryWrites=true&w=majority";

console.log("Connecting to database");


//@ts-ignore
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>console.log("Connected to mongodb"))


const connection = mongoose.createConnection(uri);
autoIncrement.initialize(connection);

//rest routes
app.get("/", (_req, res) => {
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
  console.log(`Server is running at http://localhost:${PORT}`);
});
}
startServer().catch(e=>console.log("Error starting server ",e))
