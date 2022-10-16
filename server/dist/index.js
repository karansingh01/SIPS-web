"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const typeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello() {
            return 'world';
        },
    },
};
async function listen(port) {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app });
    return new Promise((resolve, reject) => {
        httpServer.listen(port).once('listening', resolve).once('error', reject);
    });
}
async function main() {
    try {
        await listen(4000);
        console.log('🚀 Server is ready at http://localhost:4000/graphql');
    }
    catch (err) {
        console.error('💀 Error starting the node server', err);
    }
}
void main();
//# sourceMappingURL=index.js.map