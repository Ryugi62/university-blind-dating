import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Notices = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateDummyNotices = (count) => {
    const departments = [
      "컴퓨터공학과",
      "디자인학과",
      "경영학과",
      "심리학과",
      "체육학과",
      "간호학과",
      "정보통신공학과",
    ];
    const statuses = ["모집중", "마감"];
    const sexes = ["남성팀", "여성팀"];
    const schools = ["서울대", "연세대", "고려대", "한양대", "성균관대"];

    return Array.from({ length: count }, (_, i) => {
      const randomDeptCount = Math.floor(Math.random() * 3) + 2;
      const randomDepts = Array.from(
        { length: randomDeptCount },
        () => departments[Math.floor(Math.random() * departments.length)]
      );
      const uniqueDepts = [...new Set(randomDepts)];
      const randomYears = Array.from(
        { length: uniqueDepts.length },
        () => Math.floor(Math.random() * 4) + 1
      );
      const randomSex = sexes[Math.floor(Math.random() * sexes.length)];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
      const randomSchool = schools[Math.floor(Math.random() * schools.length)];

      const title = `${uniqueDepts.join(" & ")} ${uniqueDepts.length}:${
        uniqueDepts.length
      } 과팅 구해요!`;

      return {
        id: i + 1,
        title,
        departments: uniqueDepts,
        years: randomYears,
        count: uniqueDepts.length,
        sex: randomSex,
        status: randomStatus,
        school: randomSchool,
      };
    });
  };

  const notices = generateDummyNotices(10);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 text-gray-900">
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
        📢 과팅 모집 현황
      </h1>

      {/* ✅ 카드 리스트 */}
      <div className="w-full max-w-4xl flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-24">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>

      {/* ✅ 하단 고정 버튼 */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
        <Link
          to="/create-notice"
          className="w-full bg-[#007AFF] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#005BBB] transition-all duration-300 text-center block"
        >
          새로운 공지 만들기 ✍️
        </Link>
      </div>

      {/* ✅ 스크롤 최상단 버튼 */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 bg-white text-gray-900 font-semibold py-3 px-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center border border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

const NoticeCard = ({ notice }) => {
  const borderColor =
    notice.sex === "남성팀" ? "border-blue-500" : "border-pink-500";
  const textColor = notice.sex === "남성팀" ? "text-blue-500" : "text-pink-500";
  const buttonColor =
    notice.sex === "남성팀"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-pink-500 hover:bg-pink-600";

  return (
    <div
      className={`p-6 lg:p-8 bg-white border-2 ${borderColor} rounded-3xl shadow-2xl flex flex-col justify-between min-h-56 transition-all hover:scale-[1.02] w-full`}
    >
      <div className="flex items-center space-x-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {notice.title}
        </h2>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-gray-800 text-sm">
          🚻 성별:{" "}
          <span className={`font-semibold ${textColor}`}>{notice.sex}</span>
        </p>
        <span
          className={`px-4 py-1 text-sm font-medium rounded-full ${
            notice.status === "모집중"
              ? "bg-green-500 text-white"
              : "bg-gray-400 text-gray-200"
          }`}
        >
          {notice.status}
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-gray-100 p-4 shadow-sm">
        {notice.departments.map((dept, index) => (
          <p key={index} className="flex justify-between text-sm text-gray-800">
            <span className="font-medium">{notice.school}</span>
            <span className="font-medium">{dept}</span>
            <span className="text-gray-600">{notice.years[index]}학년</span>
          </p>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <Link
          to={`/notices/${notice.id}`}
          className={`text-center ${buttonColor} text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 w-full`}
        >
          자세히 보기 👀
        </Link>
      </div>
    </div>
  );
};

export default Notices;
