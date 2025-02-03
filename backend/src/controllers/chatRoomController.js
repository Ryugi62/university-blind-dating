const hash = import("bcryptjs").hash;
const { successResponse, errorResponse } = import("../utils/responseHelper.js");
const { createUser, getUserByEmail } = import("../services/userService.js");

export const registerUser = async (req, res) => {
  const { name, email, password, university, department } = req.body;

  try {
    if (!email || !password) {
      return errorResponse(res, 400, "이메일과 비밀번호는 필수입니다.");
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      university,
      department,
    });

    return successResponse(res, "회원가입 성공", { userId: newUser.id });
  } catch (error) {
    return errorResponse(res, 500, "회원가입 실패", error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserByEmail(req.params.email);
    if (!user) return errorResponse(res, 404, "유저를 찾을 수 없음");

    return successResponse(res, "유저 조회 성공", user);
  } catch (error) {
    return errorResponse(res, 500, "유저 조회 실패", error.message);
  }
};

export const createChatRoom = async (req, res) => {
  const { title, userId } = req.body;

  try {
    if (!title || !userId) {
      return errorResponse(res, 400, "제목과 사용자 ID는 필수입니다.");
    }

    // ✅ 채팅방 생성 로직
    // ...

    return successResponse(res, "채팅방 생성 성공");
  } catch (error) {
    return errorResponse(res, 500, "채팅방 생성 실패", error.message);
  }
};

export const getChatRooms = async (req, res) => {
  try {
    // ✅ 채팅방 리스트 조회 로직
    // ...

    return successResponse(res, "채팅방 조회 성공", chatRooms);
  } catch (error) {
    return errorResponse(res, 500, "채팅방 조회 실패", error.message);
  }
};
