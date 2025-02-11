import axios from "axios";
import Cookie from "../utils/cookies";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${Cookie.get("token")}`
    },
});
export default axiosInstance;