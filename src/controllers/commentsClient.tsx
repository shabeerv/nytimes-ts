import axios from "axios";

const API_URL = process.env.REACT_APP_COMMENTS_API_URL;
/*
  Base client config for your application.
  Here you can define your base url, headers,
  timeouts and middleware used for each request.
*/
const client = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: { "content-type": "application/json" },
});

// Custom middleware for requests (this one just logs the error).
client.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Custom middleware for responses (this one just logs the error).
client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

export default client;
