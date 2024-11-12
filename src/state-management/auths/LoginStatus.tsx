import React, { useReducer } from "react";
import useAuthStore from "./store";
import AuthReducer from "./authReducer";

const LoginStatus = () => {
  const {user, login, logout} = useAuthStore()
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">username: {user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login('lola')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
