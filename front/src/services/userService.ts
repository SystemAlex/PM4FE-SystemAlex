import { API_URL } from "../../envs";
import { Login } from "@/interfaces/Login";
import { Register } from "@/interfaces/Register";

export const userRegister = async (data: Register) => {
  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  return res.json();
};

export const userLogin = async (data: Login) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });

  return res.json();
};
