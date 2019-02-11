import axios from "axios";

export const getUsers = () => {
  console.log("api");
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
