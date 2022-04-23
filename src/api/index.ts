import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});

export const fetcher = (url: string) =>
  apiClient.get(url).then((res) => res.data);
