import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    token: "apikey 4stOR2L0zBLHU9jjQb2XOB:4P8ces2mJAEQPnd1fD1SEA",
    qry: "all",
    searchbar: false,
  },
  getters: {
    getData: (state) => state.data,
    getToken: (state) => state.token,
    getSearchBar: (state) => state.searchbar,
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_SEARCH_BAR(state, payload) {
      state.searchbar = payload;
    },
    SET_QRY(state, payload) {
      state.qry = payload;
      this.dispatch("set_Data");
    },
  },
  actions: {
    set_searchBar({ commit }, payload) {
      commit("SET_SEARCH_BAR", payload);
    },
    set_qry({ commit }, payload) {
      commit("SET_QRY", payload);
    },
    async set_Data({ commit, state }) {
      await fetch(
        `https://api.collectapi.com/imdb/imdbSearchByName?query=${state.qry}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: state.token,
            redirect: "follow",
          },
        }
      )
        .then((res) => res.text())
        .then((r) => {
          r = JSON.parse(r);
          commit("SET_DATA", r.result);
        });
    },
  },
  modules: {},
});
