import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "@/api";

const ChatRoomList = () => {
    const [chatRoomList, setChatRoomList] = useState([]);

    useEffect(() => {
        API.get("/chatRoomList").then(res => setChatRoomList(res.data));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 text-gray-900">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">💬 내 채팅방</h1>

            {/* ✅ 채팅방 리스트 */}
            <div className="w-full max-w-3xl flex-grow overflow-y-auto space-y-4">
                {chatRoomList.length > 0 ? (
                    chatRoomList.map(room => <ChatRoomCard key={room.id} room={room} />)
                ) : (
                    <p className="text-gray-500 text-center text-lg">아직 참여한 채팅방이 없습니다.</p>
                )}
            </div>

            {/* ✅ 하단 고정 버튼 */}
            <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
                <Link 
                    to="/notices" 
                    className="w-full bg-[#007AFF] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#005BBB] transition-all duration-300 text-center block"
                >
                    새로운 과팅 찾기 🔍
                </Link>
            </div>
        </div>
    );
};

const ChatRoomCard = ({ room }) => {
    return (
        <Link 
            to={`/chat/${room.id}`} 
            className="block p-5 bg-white rounded-3xl shadow-md transition-all hover:scale-[1.02]"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">{room.title || `채팅방 ${room.id}`}</h3>
                    <p className="text-gray-500 text-sm truncate max-w-[80%]">
                        {room.lastMessage || "메시지가 없습니다."}
                    </p>
                </div>
                {room.unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {room.unreadCount}
                    </span>
                )}
            </div>
            <p className="text-gray-400 text-xs mt-2">{room.lastMessageTime || "방금 전"}</p>
        </Link>
    );
};

export default ChatRoomList;
