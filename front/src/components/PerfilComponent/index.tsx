"use client";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const PerfilComponent = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleLog = () => {
    router.push(`/register`);
  };

  if (!user) return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="text-pink-600 text-center">You must be registered and logged in.</h2>
      <button className="button mt-3 mb-3 self-center" onClick={handleLog}>
        Sing in
      </button>
    </div>
  );

  const { name, email, address, phone } = user.user;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center items-center justify-items-center gap-5">
        <hr className="flex-grow !border-pink-600 border-2 border-dashed" />
        <p className="text-pink-600 text-center text-3xl">Your Profile</p>
        <hr className="flex-grow !border-pink-600 border-2 border-dashed" />
      </div>
      <div>
        <p className="text-2xl">
          <span className="text-gray-700 font-bold">Name: </span>
          {name}
        </p>
        <p className="text-2xl">
          <span className="text-gray-700 font-bold">Email: </span>
          {email}
        </p>
        <p className="text-2xl">
          <span className="text-gray-700 font-bold">Address: </span>
          {address}
        </p>
        <p className="text-2xl">
          <span className="text-gray-700 font-bold">Phone: </span>
          {phone}
        </p>
      </div>
    </div>
  );
};

export default PerfilComponent;
