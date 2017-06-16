import Vue from 'vue';
import Vuex from 'vuex';

import db from './utils/db.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    db,
  },
  mutations: {
    enableCategory(state) {
      return state;
    },
    disableCategory(state) {
      return state;
    },
  },
});

export default store;
