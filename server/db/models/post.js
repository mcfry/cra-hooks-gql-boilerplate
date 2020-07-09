'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },

    description: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};