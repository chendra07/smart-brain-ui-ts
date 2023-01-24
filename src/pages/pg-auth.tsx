import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";

//redux
import { zodUserState, UserState, addUser } from "../redux/slices/user.slice";
import { RootState } from "../redux/store";

//request
import { httpPostLogin, httpPostRegister } from "../requests/auth";

export default function PgAuth() {
  const [isLogin, setisLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  //Navigate to home if user already logged in
  if (user) {
    return <Navigate to="/resource/home" />;
  }

  async function handleLogin(data: { email: string; password: string }) {
    setisLoading(true);
    await httpPostLogin(data)
      .then((response) => {
        if (!zodUserState.safeParse(response.data.data).success) {
          throw new Error("Invalid data!, please contact the developer");
        }
        dispatch(addUser(response.data.data as UserState));
      })
      .catch((error) => {
        toast.error(`Failed to reach the server, Note: ${error}`);
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  async function handleRegister(data: {
    name: string;
    email: string;
    password: string;
    image64: string;
  }) {
    setisLoading(true);
    await httpPostRegister(data)
      .then((response) => {
        if (!response?.data?.data) {
          throw new Error("No data found");
        }
        if (!zodUserState.safeParse(response.data.data).success) {
          throw new Error("Invalid data!, please contact the developer");
        }
        dispatch(addUser(response.data.data as UserState));
      })
      .catch((error) => {
        toast.error(`Failed to reach the server, Note: ${error}`);
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  return (
    <div className="pg-auth d-flex">
      <div className="form-box flex-grow-1">
        <Card.Container>
          <div className="d-flex flex-column p-5">
            <h1 className="align-self-center">
              {isLogin ? "Login" : "Register"}
            </h1>
            {isLogin ? (
              <LoginForm loginInput={handleLogin} isLoading={isLoading} />
            ) : (
              <RegisterForm
                registerInput={handleRegister}
                isLoading={isLoading}
              />
            )}
            <div className="align-self-center">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setisLogin((prev) => !prev)}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </Card.Container>
      </div>
    </div>
  );
}
