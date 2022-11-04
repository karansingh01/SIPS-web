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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers');
const PORT = process.env.PORT || 3001;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // Middleware
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cors_1.default)());
    // it is technically not safe to have the uri in the code, but for the sake of the project, it is ok
    const uri = "mongodb://admin:sips@it2810-26.idi.ntnu.no:27017/";
    console.log("Connecting to database");
    //@ts-ignore
    mongoose_1.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log("Connected to mongodb"));
    const connection = mongoose_1.default.createConnection(uri);
    mongoose_auto_increment_1.default.initialize(connection);
    //rest routes
    app.get("/", (_req, res) => {
        res.json({
            data: "API is working...",
        });
    });
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
    });
    yield server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});
startServer().catch(e => console.log("Error starting server ", e));
