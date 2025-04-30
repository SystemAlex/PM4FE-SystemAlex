"use client";
import { ChangeEvent, FormEvent, useState, useContext, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Login } from "../../interfaces/Login";
import { validateLogin } from "../../helpers/validateLogin";
import { userLogin } from "@/services/userService";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";

const LoginComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
};

const LoginContent = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Login>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validateLogin({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateLogin(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const res = await userLogin(userData);
      if (!res.message) {
        setUser(res);
        router.push(redirectPath || "/");
      } else {
        if (res.message === "Invalid password") {
          setErrors(validateLogin({ ...userData, password: "wrong password" }));
        } else if (res.message === "User does not exist") {
          setErrors(validateLogin({ ...userData, email: "notfound" }));
          toast.error("User not found, please register");
        } else {
          toast.error(res.message);
        }
      }
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <div className="form-field">
        <input
          type="text"
          value={userData.email}
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          className="input"
        />
        <label>Email</label>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-field">
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          className="input"
        />
        <label>Password</label>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="flex justify-center mb-2">
        <button className="button">Log In</button>
      </div>

      <small className="text-center">
        Not registered yet?{" "}
        <Link
          href="/register"
          className="text-primary-dark underline hover:text-primary"
        >
          Sign Up here!
        </Link>
      </small>
    </form>
  );
};

export default LoginComponent;
