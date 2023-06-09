import { sequelize } from "../util/connection.util";
import { Sequelize, DataTypes } from "sequelize";
import { randomUUID } from "crypto";

const CategoryModel = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export { CategoryModel };
