import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import ImageContainer from "../imageContainer";

type RegisterFormInput = {
  name: string;
  email: string;
  password: string;
  image64: string;
};

type RegisterFormType = {
  registerInput: (value: RegisterFormInput) => void;
  isLoading: boolean;
};

//email, password, name, image (base64)
export default function RegisterForm({
  isLoading,
  registerInput,
}: RegisterFormType) {
  const [base64img, setbase64img] = useState({
    data: "",
    size: 0,
  });
  const [reenterPass, setreenterPass] = useState("");
  const [registerData, setregisterData] = useState<RegisterFormInput>({
    name: "",
    email: "",
    password: "",
    image64: "",
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
    setregisterData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    if (!registerData.password.match(combinedRegex)) {
      toast.error(
        "password must contain 1 lowercase, 1 uppercase, 1 symbol, and 1 number"
      );
      return;
    }

    if (registerData.password !== reenterPass) {
      toast.error("Please, check your password again");
      return;
    }

    //max size: 4mb
    if (!(base64img.size <= 4000000)) {
      toast.error("max image size: 4mb");
      return;
    }

    registerInput(registerData);
  }

  return (
    <Form
      className="d-flex flex-column"
      onSubmit={(e) => {
        e.preventDefault(); //prevent refresh on submit
        handleSubmit();
      }}
    >
      {base64img.data && (
        <div className="reg-form__profile-box align-self-center">
          <img
            className="reg-form__profile-img"
            src={base64img.data}
            alt="profile"
          />
        </div>
      )}
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={registerData.name || ""}
          onChange={(e) => handleChange(e)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={registerData.email || ""}
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
          value={registerData.password || ""}
          onChange={(e) => handleChange(e)}
          minLength={8}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Reenter Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={reenterPass || ""}
          onChange={(e) => setreenterPass(e.target.value)}
          minLength={8}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFile">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="image64"
          accept=".jpg, .png, .jpeg"
          draggable={true}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files![0]);
            reader.onload = () => {
              const base64str = reader.result as unknown as string;
              setbase64img({ data: base64str, size: e.target.files![0].size });

              setregisterData((prev) => ({
                ...prev,
                image64: base64str.split(",")[1],
              }));
            };
          }}
        />
      </Form.Group>
      {isLoading ? (
        <div className="spinner-border align-self-center m-3" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <div className="d-flex align-self-center">
          <Button className="m-3" variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      )}
    </Form>
  );
}
