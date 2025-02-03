import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center p-6">
            {/* 헤더 */}
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
                <Typewriter
                    words={['대학교 과 소개팅 서비스']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={10000}
                />
            </h1>
                        
            {/* 네비게이션 */}
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md text-center justify-center items-center">
                <Link to="/notices" className="w-full sm:w-auto bg-white text-blue-600 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all hover:bg-blue-600 hover:text-white">
                    📢 매칭 공지 보기
                </Link>
                <Link to="/chatrooms" className="w-full sm:w-auto bg-white text-purple-600 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all hover:bg-purple-600 hover:text-white">
                    💬 채팅방
                </Link>
                <Link to="/profile" className="w-full sm:w-auto bg-white text-green-600 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all hover:bg-green-600 hover:text-white">
                    👤 내 프로필
                </Link>
            </nav>

            {/* 추가 설명 */}
            <div className="mt-8 sm:mt-10 text-center">
                <p className="text-base sm:text-lg font-semibold">💖 마음에 맞는 과를 찾아보세요!</p>
                <p className="text-xs sm:text-sm opacity-80 mt-2">대학생들 간의 새로운 인연을 만들어보세요.</p>
            </div>

            {/* CTA 버튼 */}
            <Link to="/signup" className="mt-6 bg-yellow-400 text-gray-900 font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-all">
                지금 가입하기 🚀
            </Link>
        </div>
    );
};

export default Home;