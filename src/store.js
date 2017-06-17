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
    enabledAnimals: (state) => {
      let arrays = [];
      arrays = state.db
      .filter(item => item.enabled)
        .map(item => item.units);
      const merged = [].concat(...arrays);
      return merged;
    },
    families: state =>
      state.db.map(item => item.family),
  },
});

export default store;
