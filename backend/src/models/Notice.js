import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "Notice",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      groupSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "notices",
      timestamps: true,
    }
  );
};
