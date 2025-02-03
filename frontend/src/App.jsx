import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Notices from "@/pages/Notices/Notices";
import ChatRoomList from "@/pages/ChatRoomList/ChatRoomList";
import Profile from "@/pages/Profile/Profile";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notices" element={<Notices />} />
                <Route path="/chatRoomList" element={<ChatRoomList />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
