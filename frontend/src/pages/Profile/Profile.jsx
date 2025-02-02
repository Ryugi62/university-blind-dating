import { useEffect, useState } from "react";
import API from "../../api";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        API.get("/users/me").then(res => setUser(res.data));
    }, []);

    if (!user) return <p>로딩 중...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>👤 내 프로필</h2>
            <p>이름: {user.name}</p>
            <p>이메일: {user.email}</p>
            <p>학교: {user.university}</p>
            <p>학과: {user.department}</p>
            <p>성별: {user.gender}</p>
            <p>관심사: {user.interests}</p>
        </div>
    );
};

export default Profile;
