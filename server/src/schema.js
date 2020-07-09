const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		allPosts: [Post]!
	}

	type Mutation {
		createPost(description: String!, imageUrl: String!): Post
		deletePost(id: ID!): Boolean!
	}

	type Post {
	  # Required system field
	  id: ID!

	  description: String!
	  imageUrl: String!
	}
`;

module.exports = typeDefs;