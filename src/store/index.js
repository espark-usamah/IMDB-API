import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    token: "apikey 4stOR2L0zBLHU9jjQb2XOB:4P8ces2mJAEQPnd1fD1SEA",
    qry: "all",
    searchbar: false,
    load: false,
    movieData: [],
  },
  getters: {
    getData: (state) => state.data,
    getToken: (state) => state.token,
    getSearchBar: (state) => state.searchbar,
    getMovie: (state) => state.movieData,
    getLoad: (state) => state.load,
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
    SET_MOVIE_DATA(state, payload) {
      state.movieData = payload;
    },
  },
  actions: {
    set_searchBar({ commit }, payload) {
      commit("SET_SEARCH_BAR", payload);
    },
    set_qry({ commit }, payload) {
      commit("SET_QRY", payload);
    },
    set_Data({ commit, state }) {
      state.load = true;
      fetch(
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
        .then((res) => res.json())
        .then((data) => {
          commit("SET_DATA", data.result);
        })
        .finally(() => (state.load = false));
    },
    fetchMovieData({ commit, state }, id) {
      state.load = true;
      fetch(`https://api.collectapi.com/imdb/imdbSearchById?movieId=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: state.token,
          redirect: "follow",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          commit("SET_MOVIE_DATA", data.result);
        })
        .finally(() => (state.load = false));
    },
  },
  modules: {},
});
