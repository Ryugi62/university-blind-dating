import { Link } from "react-router-dom";

const Notices = () => {
    const generateDummyNotices = (count) => {
        const departments = ["컴퓨터공학과", "디자인학과", "경영학과", "심리학과", "체육학과", "간호학과"];
        const statuses = ["모집중", "마감"];
        const sexes = ["male", "female"];
        const notices = [];

        for (let i = 1; i <= count; i++) {
            const randomDept1 = departments[Math.floor(Math.random() * departments.length)];
            const randomDept2 = departments[Math.floor(Math.random() * departments.length)];
            const randomYear1 = Math.floor(Math.random() * 4) + 1;
            const randomYear2 = Math.floor(Math.random() * 4) + 1;
            const randomCount1 = Math.floor(Math.random() * 3) + 1;
            const randomCount2 = Math.floor(Math.random() * 3) + 1;
            const randomSex = sexes[Math.floor(Math.random() * sexes.length)];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

            const title = `${randomDept1} ${randomYear1}학년 ${randomCount1}명${randomDept2 ? `, ${randomDept2} ${randomYear2}학년 ${randomCount2}명` : ""} 과팅 구해요`;
            const participants = `${randomDept1}${randomDept2 ? `, ${randomDept2}` : ""}`;

            notices.push({
                id: i,
                title: title,
                participants: participants,
                sex: randomSex,
                status: randomStatus,
            });
        }

        return notices;
    };

    const notices = generateDummyNotices(50);
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
            {/* 헤더 */}
            <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
                📢 매칭 공지 보기
            </h1>

            {/* 모집 공지 리스트 */}
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
                {notices.map((notice) => (
                    <div key={notice.id} className={`p-6 mb-4 rounded-lg shadow-md flex flex-col justify-between bg-white`}>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">{notice.title}</h2>
                            <p className="text-gray-600 mt-2">{notice.participants}</p>
                        </div>
                        <span className={`mt-4 px-4 py-2 text-sm rounded-full self-start ${notice.status === "모집중" ? "bg-green-500 text-white" : "bg-gray-400 text-gray-200"}`}>
                            {notice.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA 버튼: 새로운 모집 공지 생성 */}
            <Link to="/create-notice" className="mt-8 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all">
                새로운 모집 공지 만들기 ✍️
            </Link>
        </div>
    );
};

export default Notices;
