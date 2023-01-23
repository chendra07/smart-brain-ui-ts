import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";

type LoginFormType = {
  loginInput: (value: { email: string; password: string }) => void;
  isLoading: boolean;
};

//email, password
export default function LoginForm({ loginInput, isLoading }: LoginFormType) {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const regexCfgList = [
    "(?=.*[0-9])", //1 number
    "(?=.*[!@#$%^&*_])", //1 special characters
    "(?=.*[a-z])", //1 lowercase
    "(?=.*[A-Z])", //1 uppercase
  ];

  const combinedRegex = regexCfgList.join("");

  function handleChange(e: any) {
    // console.log(e.target);

    const key = e.target.name;
    const value = e.target.value;
    setloginData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    if (!loginData.password.match(combinedRegex)) {
      toast.error(
        "password must contain 1 lowercase, 1 uppercase, 1 symbol, and 1 number"
      );
      return;
    }
    loginInput(loginData);
  }

  return (
    <Form
      className="d-flex flex-column"
      onSubmit={(e) => {
        e.preventDefault(); //prevent refresh on submit
        handleSubmit();
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={loginData.email || ""}
          onChange={(e) => handleChange(e)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password || ""}
          onChange={(e) => handleChange(e)}
          minLength={8}
          required
        />
      </Form.Group>
      {isLoading ? (
        <div className="spinner-border align-self-center m-3" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <Button
          className="align-self-center m-3"
          variant="primary"
          size="lg"
          type="submit"
        >
          Submit
        </Button>
      )}
    </Form>
  );
}
