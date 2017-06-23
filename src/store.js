/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import db from './utils/db.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    db,
  },
  mutations: {
    disableFamily(state, i) {
      state.db[i].enabled = false;
    },
    enableFamily(state, i) {
      state.db[i].enabled = true;
    }
  },
  getters: {

    families: state =>
      state.db.map(item => item.family),

    categories: state =>
      state.db.map(item => item.units)
  },
});

export default store;
