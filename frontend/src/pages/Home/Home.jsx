import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 flex flex-col items-center justify-center p-6">
            {/* Header */}
            <h1 className="text-3xl sm:text-5xl font-semibold mb-6 text-center">
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
                        
            {/* Navigation */}
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md text-center justify-center items-center">
                <Link to="/notices" className="w-full sm:w-auto bg-white text-gray-900 font-medium py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all hover:bg-gray-200">
                    📢 매칭 공지 보기
                </Link>
                <Link to="/chatRoomList" className="w-full sm:w-auto bg-white text-gray-900 font-medium py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all hover:bg-gray-200">
                    💬 채팅방
                </Link>
                <Link to="/profile" className="w-full sm:w-auto bg-white text-gray-900 font-medium py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all hover:bg-gray-200">
                    👤 내 프로필
                </Link>
            </nav>

            {/* Additional Info */}
            <div className="mt-8 sm:mt-10 text-center">
                <p className="text-base sm:text-lg font-medium">💖 마음에 맞는 과를 찾아보세요!</p>
                <p className="text-xs sm:text-sm opacity-80 mt-2">대학생들 간의 새로운 인연을 만들어보세요.</p>
            </div>

            {/* CTA Button */}
            <Link to="/signup" className="mt-6 bg-blue-500 text-white font-medium py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-blue-600 transition-all">
                지금 가입하기 🚀
            </Link>
        </div>
    );
};

export default Home;