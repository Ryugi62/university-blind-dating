import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "ChatRoom",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      noticeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "notices",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "chat_rooms",
      timestamps: true, // createdAt, updatedAt 자동 생성
    }
  );
};
