import { fetchData } from "../../utilities/";

export default {
  namespaced: true, // có tính năng khi dispatch một action chính xác vào từng thuôc tính trong module
  state: {
    loading: false,
    count: 0,
    data: [],
  },
  getters: {},
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.count += 1;
      state.data = payload;
    }
  },
  actions: {
    GET_PRODUCTS: ({ commit }) => {
      fetchData("http://localhost:5000/products")
        .then(response => {
          commit("SET_PRODUCTS", response);
        })
    }
  }
}