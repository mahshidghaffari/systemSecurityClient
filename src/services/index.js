import axios from "axios";

//make the URL universal [to do]
// axios.defaults.baseURL = process.env.VUE_APP_URL_API;

import  {getService}  from "./get.service"
import {pService} from "./post_put.service "



export const service = ({
  modules: {
    getService,
    pService
  }
});

 