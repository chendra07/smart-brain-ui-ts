import { axiosRequest } from "../utils/axiosRequest";

export async function httpPostLogin(data: { email: string; password: string }) {
  return await axiosRequest.Post(null, "v1/auth/login", data);
}

export async function httpPostRegister(data: {
  name: string;
  email: string;
  password: string;
  image64: string;
}) {
  return await axiosRequest
    .Post(null, "v1/auth/register", data)
    .catch((error) => {
      console.log(error);
    });
}
