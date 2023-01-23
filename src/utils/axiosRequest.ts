import axios from "axios";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const renderHeaders = (headerCfg?: object | null, uploadFile?: File | null) => {
  let header;
  header = {
    "Content-Type": uploadFile ? "multipart/form-data" : "application/json",
  };

  if (headerCfg) {
    header = { ...header, ...headerCfg };
  }

  return header;
};

//generate query based on given object
function generateQueryParams(request: object) {
  let listOfQuery: string[] = [];
  Object.keys(request).forEach((item, index) => {
    let keyObj = item as keyof typeof request;

    listOfQuery.push(`${[item]}=${request[keyObj]}`);
  });

  return listOfQuery;
}

//zod used for validation when using axios
const zodAxiosSchema = z.object({
  message: z.string(),
  data: z.any().nullable(),
});

const zodAxiosConfig = z.object({
  method: z.enum(["get", "post", "put", "delete"]),
  baseURL: z.string(),
  url: z.string(),
  data: z.any().optional(),
  headers: z.object({
    "Content-Type": z.string(),
  }),
});

// //[uncomment this code after define the zodAxiosSchema]
export type AxiosSchema = z.infer<typeof zodAxiosSchema>;

// //[delete this code after define the zodAxiosSchema]
// export type AxiosSchema = any;

type AxiosConfig = z.infer<typeof zodAxiosConfig>;

function axiosPromise(axiosConfig: AxiosConfig) {
  return new Promise<AxiosSchema>((resolve, reject) => {
    axios(axiosConfig)
      .then((resp: any) => {
        //[uncomment this code after define the zodAxiosSchema and AxiosSchema]
        const respValidation = zodAxiosSchema.safeParse(resp.data);

        //validating object from axios using zod
        if (!respValidation.success) {
          return reject(
            `(${axiosConfig.method.toUpperCase()}): ${
              fromZodError(respValidation.error).message
            }`
          );
        }
        return resolve(resp as AxiosSchema);
      })
      .catch((error) => {
        return reject(
          `(${axiosConfig.method.toUpperCase()}): ${
            error.response.data.message
          }`
        );
      });
  });
}

async function Get(
  baseUrl: string | null,
  path: string,
  headerCfg?: object,
  paramsObj?: object
) {
  const headers = renderHeaders(headerCfg);
  let queryParams: string[] = [];
  if (paramsObj) {
    queryParams = generateQueryParams(paramsObj);
  }

  const getAxiosConfig: AxiosConfig = {
    method: "get",
    baseURL: baseUrl ?? import.meta.env.VITE_API_URL!,
    url: `${path}?${queryParams.join("&") || ""}`,
    headers,
  };

  const promise = axiosPromise(getAxiosConfig);
  return promise;
}

async function Post(
  baseUrl: string | null,
  path: string,
  sendData: object,
  headerCfg?: object,
  paramsObj?: object
) {
  const headers = renderHeaders(headerCfg);
  let queryParams: string[] = [];
  if (paramsObj) {
    queryParams = generateQueryParams(paramsObj);
  }

  const postAxiosConfig: AxiosConfig = {
    method: "post",
    baseURL: baseUrl ?? import.meta.env.VITE_API_URL!,
    url: `${path}?${queryParams.join("&") || ""}`,
    data: sendData,
    headers,
  };

  const promise = axiosPromise(postAxiosConfig);
  return promise;
}

async function Put(
  baseUrl: string | null,
  path: string,
  sendData: object,
  headerCfg?: object,
  paramsObj?: object
) {
  const headers = renderHeaders(headerCfg);
  let queryParams: string[] = [];
  if (paramsObj) {
    queryParams = generateQueryParams(paramsObj);
  }

  const putAxiosConfig: AxiosConfig = {
    method: "put",
    baseURL: baseUrl ?? import.meta.env.VITE_API_URL!,
    url: `${path}?${queryParams.join("&") || ""}`,
    data: sendData,
    headers,
  };

  const promise = axiosPromise(putAxiosConfig);

  return promise;
}

async function Delete(
  baseUrl: string | null,
  path: string,
  headerCfg?: object,
  paramsObj?: object
) {
  const headers = renderHeaders(headerCfg);
  let queryParams: string[] = [];
  if (paramsObj) {
    queryParams = generateQueryParams(paramsObj);
  }

  const deleteAxiosConfig: AxiosConfig = {
    method: "delete",
    baseURL: baseUrl ?? import.meta.env.VITE_API_URL!,
    url: `${path}?${queryParams.join("&") || ""}`,
    headers,
  };

  const promise = axiosPromise(deleteAxiosConfig);

  return promise;
}

export const axiosRequest = {
  Get,
  Post,
  Put,
  Delete,
};
