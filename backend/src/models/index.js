import initializeSequelize from "../config/database.js";

// ✅ 모델 불러오기
import UserModel from "./User.js";
import NoticeModel from "./Notice.js";
import ChatRoomModel from "./ChatRoom.js"; // ✅ 추가
import ChatMessageModel from "./ChatMessage.js";
import ChatReadModel from "./ChatRead.js";

const initModels = async () => {
  const sequelize = await initializeSequelize();

  // ✅ 모델을 Sequelize에 등록
  const User = UserModel(sequelize);
  const Notice = NoticeModel(sequelize);
  const ChatRoom = ChatRoomModel(sequelize); // ✅ 추가
  const ChatMessage = ChatMessageModel(sequelize);
  const ChatRead = ChatReadModel(sequelize);

  // ✅ 모델 관계 설정
  User.hasMany(Notice, { foreignKey: "creatorId" });
  Notice.belongsTo(User, { foreignKey: "creatorId" });

  // ✅ 공지(Notice)가 매칭되면 ChatRoom 생성 (1:1 관계)
  Notice.hasOne(ChatRoom, { foreignKey: "noticeId" });
  ChatRoom.belongsTo(Notice, { foreignKey: "noticeId" });

  // ✅ ChatRoom과 ChatMessage 연결 (1:N 관계)
  ChatRoom.hasMany(ChatMessage, { foreignKey: "roomId" });
  ChatMessage.belongsTo(ChatRoom, { foreignKey: "roomId" });

  // ✅ User와 ChatMessage 연결 (1:N 관계)
  User.hasMany(ChatMessage, { foreignKey: "senderId" });
  ChatMessage.belongsTo(User, { foreignKey: "senderId" });

  // ✅ User와 ChatRead 연결 (1:N 관계)
  User.hasMany(ChatRead, { foreignKey: "userId" });
  ChatRead.belongsTo(User, { foreignKey: "userId" });

  // ✅ ChatMessage와 ChatRead 연결 (1:N 관계)
  ChatMessage.hasMany(ChatRead, { foreignKey: "chatMessageId" });
  ChatRead.belongsTo(ChatMessage, { foreignKey: "chatMessageId" });

  // ✅ 테이블이 없으면 자동으로 생성
  await sequelize.sync({ alter: true });

  return { sequelize, User, Notice, ChatRoom, ChatMessage, ChatRead };
};

export default initModels;
