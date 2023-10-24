import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://3f8hd6whlf.execute-api.eu-west-1.amazonaws.com/prod/",
});

export default axiosInstance;
