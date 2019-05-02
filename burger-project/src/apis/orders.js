import axios from "axios";

export default axios.create({
  baseURL: "https://burgerproject-19784.firebaseio.com/"
});
