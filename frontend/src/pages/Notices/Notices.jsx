import { Link } from "react-router-dom";

const Notices = () => {
    const generateDummyNotices = (count) => {
        const departments = ["컴퓨터공학과", "디자인학과", "경영학과", "심리학과", "체육학과", "간호학과", "정보통신공학과"];
        const statuses = ["모집중", "마감"];
        const sexes = ["남성팀", "여성팀"];

        return Array.from({ length: count }, (_, i) => {
            const randomDeptCount = Math.floor(Math.random() * 3) + 1;
            const randomDepts = Array.from({ length: randomDeptCount }, () => departments[Math.floor(Math.random() * departments.length)]);
            const randomYears = Array.from({ length: randomDeptCount }, () => Math.floor(Math.random() * 4) + 1);
            const randomCount = Math.floor(Math.random() * 3) + 1;
            const randomSex = sexes[Math.floor(Math.random() * sexes.length)];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

            return {
                id: i + 1,
                departments: randomDepts,
                years: randomYears,
                count: randomCount,
                sex: randomSex,
                status: randomStatus,
            };
        });
    };

    const notices = generateDummyNotices(10);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
                📢 과팅 모집 현황
            </h1>

            {/* 모집 공지 리스트 */}
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
                {notices.map((notice) => (
                    <div 
                        key={notice.id} 
                        className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between min-h-56"
                    >
                        {/* 모집 상태 뱃지 */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-blue-600">
                                🏫 {notice.count}:{notice.count} 과팅 모집
                            </h2>
                            <span className={`px-4 py-1 text-sm font-semibold rounded-full ${notice.status === "모집중" ? "bg-green-500 text-white" : "bg-gray-400 text-gray-200"}`}>
                                {notice.status}
                            </span>
                        </div>

                        {/* 팀 정보 */}
                        <div className="mt-3 bg-gray-100 p-3 rounded-lg space-y-2 flex-1">
                            {notice.departments.map((dept, index) => (
                                <p key={index} className="flex justify-between text-sm">
                                    <span className="font-medium">{dept}</span>
                                    <span className="text-gray-600">{notice.years[index]}학년</span>
                                </p>
                            ))}
                        </div>

                        {/* 성별 & 참여 버튼 */}
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-gray-800 text-sm">
                                🚻 성별: <span className="font-semibold">{notice.sex}</span>
                            </p>
                            <Link 
                                to={`/notices/${notice.id}`} 
                                className={`text-center ${notice.sex === "남성팀" ? "bg-blue-600 hover:bg-blue-700" : "bg-pink-500 hover:bg-pink-600"} text-white font-semibold py-2 px-3 rounded-lg text-sm transition-all`}
                            >
                                자세히 보기 👀
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* 새 모집 공지 생성 버튼 */}
            <Link to="/create-notice" className="mt-8 bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-all">
                새로운 모집 공지 만들기 ✍️
            </Link>
        </div>
    );
};

export default Notices;
