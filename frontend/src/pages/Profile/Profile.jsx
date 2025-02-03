import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@/api";
import { Link } from "react-router-dom";

const Profile = () => {
    const { id } = useParams(); // ✅ 특정 유저 ID 가져오기
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // ✅ 더미 데이터 (API 호출 실패 시 대체 데이터)
    const dummyUser = {
        name: "김철수",
        email: "chulsoo@example.com",
        university: "서울대학교",
        department: "컴퓨터공학과",
        gender: "남성",
        interests: "축구, 게임, 음악"
    };

    useEffect(() => {
        const endpoint = id ? `/users/${id}` : "/users/me";

        API.get(endpoint, { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => {
                console.error("❌ API 요청 실패, 더미 데이터로 대체합니다.");
                setUser(dummyUser); // ✅ API 요청 실패 시 더미 데이터 사용
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="text-center text-lg text-gray-500">로딩 중...</p>;
    if (!user) return <p className="text-center text-lg text-red-500">사용자를 찾을 수 없습니다.</p>;

    // ✅ 성별에 따라 컬러 설정
    const borderColor = user.gender === "남성" ? "border-blue-500" : "border-pink-500";
    const textColor = user.gender === "남성" ? "text-blue-500" : "text-pink-500";

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 text-gray-900">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">👤 프로필</h1>

            {/* ✅ 에러 메시지 표시 */}
            {error && (
                <p className="text-red-500 text-center mb-4">⚠️ 데이터 로드 실패 (더미 데이터 사용 중)</p>
            )}

            {/* ✅ 프로필 카드 */}
            <div className={`p-6 lg:p-8 bg-white border-2 ${borderColor} rounded-3xl shadow-lg transition-all hover:scale-105 w-full max-w-lg`}>
                <div className="flex items-center space-x-3 mb-4">
                    <span className={`text-3xl ${textColor}`}>{user.gender === "남성" ? "👨‍💼" : "👩‍🎓"}</span>
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                </div>
                <p className="text-gray-600 text-sm">이메일: {user.email}</p>
                <p className="text-gray-600 text-sm">학교: {user.university}</p>
                <p className="text-gray-600 text-sm">학과: {user.department}</p>
                <p className="text-gray-600 text-sm">성별: {user.gender}</p>
                <p className="text-gray-600 text-sm">관심사: {user.interests || "정보 없음"}</p>

                {/* ✅ 버튼 영역 */}
                {!id ? (
                    <div className="mt-6 flex justify-between">
                        <Link to="/edit-profile" className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-400">
                            프로필 수정
                        </Link>
                        <Link to="/notices" className="px-4 py-2 bg-[#007AFF] text-white rounded-lg font-semibold hover:bg-[#005BBB]">
                            과팅 찾기 🔍
                        </Link>
                    </div>
                ) : (
                    <div className="mt-6">
                        <Link to="/chat" className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600">
                            채팅하기 💬
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
