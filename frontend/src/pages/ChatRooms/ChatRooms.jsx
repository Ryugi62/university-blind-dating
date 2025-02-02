import { useEffect, useState } from "react";
import API from "@/api";

const ChatRooms = () => {
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        API.get("/chatrooms").then(res => setChatRooms(res.data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>💬 내 채팅방</h2>
            <ul>
                {chatRooms.map(room => (
                    <li key={room.id}>채팅방 {room.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRooms;
