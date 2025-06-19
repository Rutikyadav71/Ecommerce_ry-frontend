import axios from "axios";

const API = axios.create({
  baseURL: "http://steadfast-enthusiasm-production.up.railway.app/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
