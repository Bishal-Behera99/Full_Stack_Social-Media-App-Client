import axios from "axios";
import {
  KEY_ACCESS_TOKEN,
  getItem,
  removeItem,
  setItem,
} from "./Localstoragemanager";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
  const accesstoken = getItem(KEY_ACCESS_TOKEN);
  console.log(accesstoken);
  request.headers["Authorization"] = `Bearer ${accesstoken}`;
  return request;
});

axiosClient.interceptors.response.use(
  async (response) => {
    const data = response.data;

    if (data.status === "ok") {
      return data;
    }

    const originalrequest = response.config;
    const statuscode = data.statuscode;
    const error = data.message;

    if (statuscode === 401 && !originalrequest._retry) {
      originalrequest._retry = true;
      const response = await axios
        .create({
          withCredentials: true,
        })
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`);

      console.log("Response From Backend", response);

      if (response.data.status === "ok") {
        setItem(KEY_ACCESS_TOKEN, response.data.result.accesstoken);
        console.log(response.data.result.accesstoken);
        originalrequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.result.accesstoken}`;

        return axios(originalrequest);
      } else {
        removeItem(KEY_ACCESS_TOKEN);
        // Reme
        window.location.replace("/login", "_self");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
  async (error) => {
    console.log(error);
  }
);
