import axios from "axios";

const agent = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default agent;
