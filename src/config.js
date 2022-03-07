const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

if (!API_KEY) {
  throw Error("API_KEY must be set as an env variable");
}

const API_URL = `${API_BASE_URL}?apikey=${API_KEY}`;

export { API_URL };
