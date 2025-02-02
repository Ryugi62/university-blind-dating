import initializeSequelize from "../config/database.js";

import UserModel from "./User.js";
import NoticeModel from "./Notice.js";
import ChatRoomModel from "./ChatRoom.js";
import ChatMessageModel from "./ChatMessage.js";
import ChatReadModel from "./ChatRead.js";

const initModels = async () => {
  try {
    const sequelize = await initializeSequelize();

    const User = UserModel(sequelize);
    const Notice = NoticeModel(sequelize);
    const ChatRoom = ChatRoomModel(sequelize);
    const ChatMessage = ChatMessageModel(sequelize);
    const ChatRead = ChatReadModel(sequelize);

    User.hasMany(Notice, { foreignKey: "creatorId" });
    Notice.belongsTo(User, { foreignKey: "creatorId" });

    Notice.hasOne(ChatRoom, { foreignKey: "noticeId" });
    ChatRoom.belongsTo(Notice, { foreignKey: "noticeId" });

    ChatRoom.hasMany(ChatMessage, { foreignKey: "roomId" });
    ChatMessage.belongsTo(ChatRoom, { foreignKey: "roomId" });

    User.hasMany(ChatMessage, { foreignKey: "senderId" });
    ChatMessage.belongsTo(User, { foreignKey: "senderId" });

    User.hasMany(ChatRead, { foreignKey: "userId" });
    ChatRead.belongsTo(User, { foreignKey: "userId" });

    ChatMessage.hasMany(ChatRead, { foreignKey: "chatMessageId" });
    ChatRead.belongsTo(ChatMessage, { foreignKey: "chatMessageId" });

    await sequelize.sync({ alter: true });

    console.log("All models were synchronized successfully.");

    return { sequelize, User, Notice, ChatRoom, ChatMessage, ChatRead };
  } catch (error) {
    console.error("Unable to initialize models:", error);
    throw error;
  }
};

export default initModels;
