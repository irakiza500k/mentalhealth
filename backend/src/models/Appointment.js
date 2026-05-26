import { DataTypes } from "sequelize";

import sequelize from "../config/db.js";

const Appointment = sequelize.define("Appointment", {

  name: {

    type: DataTypes.STRING,

    allowNull: false

  },

  email: {

    type: DataTypes.STRING,

    allowNull: false

  },

  date: {

    type: DataTypes.STRING,

    allowNull: false

  },

  time: {

    type: DataTypes.STRING,

    allowNull: false

  },

  issue: {

    type: DataTypes.TEXT,

    allowNull: false

  }

});

export default Appointment;