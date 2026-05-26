import { DataTypes } from "sequelize";

import sequelize from "../config/db.js";

const Post = sequelize.define("Post", {

  username: {

    type: DataTypes.STRING,

    allowNull: false

  },

  content: {

    type: DataTypes.TEXT,

    allowNull: false

  }

});

export default Post;