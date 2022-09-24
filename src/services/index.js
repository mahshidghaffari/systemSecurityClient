import axios from "axios";

//make the URL universal [to do]
axios.defaults.baseURL = process.env.VUE_APP_URL_API;


export const services = {
getInitial}

function getInitial(){
  return axios({
    method: "get",
    url: "/",
    changeOrigin: true,
  })
}