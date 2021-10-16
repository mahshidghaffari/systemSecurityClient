// import { services } from "../Services/Services";
const state = {
    desertList: [],
}

const mutations = {

    // getPizzaSuccess(state, data) {
        // state.pizzaList = data.data
    // },
}

// dispatch action
const actions = {
    // getPizza({ commit }) {
    //     services.getPizza()
    //         .then(response => {
    //             commit('getPizzaSuccess', response.data)
    //         }, error => {
    //             console.log(error)
    //         }

    //         )
    // },

}


export const firstModule  = {
    namespaced: true,
    state,
    mutations,
    actions
}