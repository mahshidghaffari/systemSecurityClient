import Vue from "vue";
import Vuex from "vuex";

import { firstModule } from "./first.module";
import { secondModule } from "./second.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    firstModule,
    secondModule,
  },
});
