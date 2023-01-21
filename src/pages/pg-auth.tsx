import React, { useState } from "react";

import { Card } from "../components";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";
import { Navigate } from "react-router-dom";

export default function PgAuth() {
  const [isLogin, setisLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  //TODO: Navigate to home if user already logged in
  // if (true) {
  //   return <Navigate to="/resource/home" />;
  // }

  async function handleLogin(data: any) {
    //TODO: create login axios
  }

  async function handleRegister(data: any) {
    //TODO: create register axios
  }

  return (
    <div className="pg-auth d-flex">
      <div className="form-box flex-grow-1">
        <Card.Container>
          <div className="d-flex flex-column p-5">
            {isLogin ? (
              <>
                <h1 className="align-self-center">Login</h1>
                <LoginForm
                  passInput={(input) => {
                    console.log(input);
                    setisLoading((prev) => !prev);
                  }}
                  isLoading={isLoading}
                />
              </>
            ) : (
              <>
                <h1 className="align-self-center">Login</h1>
                <RegisterForm />
              </>
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
