import axios from "axios";

const API_KEY = "f00863f0095d49f1992f406668b589b4";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: API_KEY,
  },
});
