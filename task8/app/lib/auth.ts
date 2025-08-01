
import axios from "axios";

interface SignupData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "user" | "employer";
    }

    interface LoginData {
    email: string;
    password: string;
    }
const BASE_URL = "https://akil-backend.onrender.com";

export async function signup(data: SignupData) {
  const res = await axios.post(`${BASE_URL}/signup`, data);
  return res.data;
}

export async function login(data:LoginData) {
  const res = await axios.post(`${BASE_URL}/login`, data);
  return res.data;
}
