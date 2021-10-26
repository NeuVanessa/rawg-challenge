import axios from "axios";

const API_KEY = "69fe36f2f31c4f36b94c8137380f9027";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: API_KEY,
  },
});
