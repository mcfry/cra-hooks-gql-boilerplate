module.exports = {
  Query: {
    allPosts: async (_, __, { dataSources }) =>
      dataSources.pgAPI.posts(),
  },

  Mutation: {
  	createPost: async (_, { description, imageUrl }, { dataSources }) =>
  		dataSources.pgAPI.createPost(description, imageUrl),
  	deletePost: async (_, { id }, { dataSources }) =>
  		dataSources.pgAPI.deletePost(id),
  }
};