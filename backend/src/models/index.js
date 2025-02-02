import initializeSequelize from "../config/database.js";

// 모델 불러오기
import User from "./User.js";
// import Notice from "./Notice";
// import ChatRoom from "./ChatRoom";
// import ChatMessage from "./ChatMessage";
// import ChatRead from "./ChatRead";

const initModels = async () => {
  const sequelize = await initializeSequelize();

  const UserModel = User(sequelize);
  // const NoticeModel = Notice(sequelize);
  // const ChatRoomModel = ChatRoom(sequelize);
  // const ChatMessageModel = ChatMessage(sequelize);
  // const ChatReadModel = ChatRead(sequelize);

  // 모델 관계 설정 (1:N, N:M 등)
  //   User.hasMany(Notice, { foreignKey: "creatorId" });
  //   Notice.belongsTo(User, { foreignKey: "creatorId" });

  //   Notice.hasOne(ChatRoom, { foreignKey: "noticeId" });
  //   ChatRoom.belongsTo(Notice, { foreignKey: "noticeId" });

  //   ChatRoom.hasMany(ChatMessage, { foreignKey: "roomId" });
  //   ChatMessage.belongsTo(ChatRoom, { foreignKey: "roomId" });

  //   User.hasMany(ChatMessage, { foreignKey: "senderId" });
  //   ChatMessage.belongsTo(User, { foreignKey: "senderId" });

  //   ChatMessage.hasMany(ChatRead, { foreignKey: "messageId" });
  //   ChatRead.belongsTo(ChatMessage, { foreignKey: "messageId" });

  //   User.hasMany(ChatRead, { foreignKey: "userId" });
  //   ChatRead.belongsTo(User, { foreignKey: "userId" });

  // 테이블이 없으면 자동으로 생성
  await sequelize.sync();

  return { sequelize, User: UserModel };
};

export default initModels;
