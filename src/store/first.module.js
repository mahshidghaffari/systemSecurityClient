// import { services } from "../Services/Services";
import axios from "axios";
import { services } from "@/services";
axios.defaults.baseURL = 'http://localhost:5000/';

const state = {};

const mutations = {};

// dispatch action
const actions = {
  getInitial() {
    console.log("yo.");
    services.getInitial()
      .then(response => {
        console.log(response);
        }, error => {
          console.log(error)
        }

      )
  },
};

export const firstModule = {
  namespaced: true,
  state,
  mutations,
  actions
};
