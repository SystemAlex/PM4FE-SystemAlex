import { Login } from "../interfaces/Login";

export const validateLogin = (
  input: Login,
  validateEmptyFields = false
): Login => {
  const errors: Login = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validateEmptyFields) {
    if (!input.email) {
      errors.email = "Email is required";
    }

    if (!input.password) {
      errors.password = "Password is required";
    }
  }

  if (input.password && input.password === "wrong password") {
    errors.password = "Wrong Password";
  }
  if (input.email === "notfound") {
    errors.email = "User not found, please register";
  } else if (input.email && !emailRegex.test(input.email)) {
    errors.email = "Email with invalid format";
  }

  return errors;
};
