import axios from "axios";

const BASE_URL = "https://api.github.com/repos/facebook/react/issues";

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}${url}`);
  return response.data;
};
