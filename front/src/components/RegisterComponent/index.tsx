"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { IRegister } from "../../interfaces/IRegister";
import { validateRegister } from "../../helpers/validateRegister";
import { userRegister } from "@/services/userService";
import Link from "next/link";

const RegisterComponent = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    repeatedPassword: "",
  });

  const [errors, setErrors] = useState<IRegister>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validateRegister({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateRegister(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const res = await userRegister(userData);
      if (!res.message) {
        router.push("/login");
      } else {
        alert(res.message);
      }

      setUserData({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: "",
        repeatedPassword: "",
      });
    }
  };
  return (
    <form onSubmit={handleOnSubmit} className="form">
      <div className="form-field">
        <input
          type="text"
          value={userData.name}
          name="name"
          placeholder="First and Last Name"
          onChange={handleInputChange}
          className="input"
        />
        <label>First and Last Name</label>
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
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
          type="text"
          value={userData.address}
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
          className="input"
        />
        <label>Address</label>
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div className="form-field">
        <input
          type="text"
          value={userData.phone}
          name="phone"
          placeholder="Phone"
          onChange={handleInputChange}
          className="input"
        />
        <label>Phone</label>
        {errors.phone && <p className="error">{errors.phone}</p>}
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
      <div className="form-field">
        <input
          type="password"
          value={userData.repeatedPassword}
          name="repeatedPassword"
          placeholder="Repeat Password"
          onChange={handleInputChange}
          className="input"
        />
        <label>Repeat Password</label>
        {errors.repeatedPassword && (
          <p className="error">{errors.repeatedPassword}</p>
        )}
      </div>
      <div className="flex justify-center mb-2">
        <button className="button">Sing Up</button>
      </div>
      <small className="text-center max-md:mb-2">
        Already registered?{" "}
        <Link
          href="/login"
          className="text-primary-dark underline hover:text-primary"
        >
          Log In here!
        </Link>
      </small>
    </form>
  );
};

export default RegisterComponent;
