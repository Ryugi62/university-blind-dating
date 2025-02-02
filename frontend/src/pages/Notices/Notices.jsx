import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>🏫 대학교 과 소개팅 서비스 🚀</h1>
            <nav>
                <Link to="/notices">📢 매칭 공지 보기</Link> | 
                <Link to="/chatrooms">💬 채팅방</Link> | 
                <Link to="/profile">👤 내 프로필</Link>
            </nav>
        </div>
    );
};

export default Home;
