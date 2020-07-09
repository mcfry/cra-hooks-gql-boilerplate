require('dotenv').config();

// GraphQL
// NOTE: Sharing package.json

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// GraphQL -> DB Bridge
const PostgresAPI = require('../datasources/pg');

// DB
const db = require('../db/models/index.js');
const store = {
	db,
	'Post': db.Post
};

const server = new ApolloServer({
	cors: {
        credentials: true,
        origin: (origin, callback) => {
            const whitelist = [
                "http://localhost:3000",
                "localhost:3000",
                "https://site2.com"
            ];

            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error("Not allowed by CORS"))
            }
        }
    },
	typeDefs,
	resolvers,
	dataSources: () => ({
		pgAPI: new PostgresAPI({ store })
	})
});

// localhost:4000
server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});