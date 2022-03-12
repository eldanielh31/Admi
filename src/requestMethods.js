import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let root = JSON.parse(localStorage.getItem("persist:root"));

let user;
root? user = JSON.parse(root.user) : user = null;

let TOKEN;
user? TOKEN = user.currentUser?.accessToken : TOKEN = "";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
    },
})