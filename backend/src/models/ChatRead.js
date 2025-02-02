import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "ChatRead",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      messageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "chat_reads",
      timestamps: true,
    }
  );
};
