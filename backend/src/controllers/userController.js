const hash = import("bcryptjs").hash;
const { successResponse, errorResponse } = import("../utils/responseHelper.js");
const { createUser, getUserByEmail } = import("../services/userService.js");

export const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    university,
    department,
    gender,
    birthYear,
    phone,
    interests,
  } = req.body;

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
      gender,
      birthYear,
      phone,
      interests,
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
