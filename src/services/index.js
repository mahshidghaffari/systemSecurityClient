import axios from "axios";

//make the URL universal [to do]
axios.defaults.baseURL = process.env.VUE_APP_URL_API;


export const services = {
  getInitial,
  login
};

function getInitial() {
  return axios({
    method: "get",
    url: "/",
    changeOrigin: true
  });
}

function login(UserInfo) {
  return axios({
    method:"post",
    url:"/",
    changeOrigin: true,
    data: UserInfo
  })
}