import { amount } from "../../utilities/amountOfCart.js";

export default {
  namespaced: true, // có tính năng khi dispatch một action chính xác vào từng thuôc tính trong module
  state: {
    data: [],
    amount: 0,
  },
  getters: {},
  mutations: {
    SET_TO_CART: (state, payload) => {
      state.data = [...state.data, payload];
      state.amount = amount(state.data);

      console.log(state);
    },
    CHANGE_AMOUNT: (state, newCart) => {
      state.data = newCart;
      state.amount = amount(state.data);
    },
    DELETE_PRO: (state, newCart) => {
      state.data = newCart;
    },
  },
  actions: {
    ADD_TO_CART: ({ commit }, { payload }) => {
      commit("SET_TO_CART", payload);
    },
    INCREASE_AMOUNT: ({ commit, state }, { cartIndex }) => {
      const newCart = state.data.reduce((acc, cur, index) => {
        if (index === cartIndex) {
          cur.amount += 1;
          acc.push(cur);
        } else {
          acc.push(cur);
        }

        return acc;
      }, []);


      commit("CHANGE_AMOUNT", newCart);
    },
    DELETE_PRO_OF_CART: ({ commit, state }, { id }) => {
      const newCart = state.data.filter((v) => v.id !== id);

      commit("DELETE_PRO", newCart);
    },
  }
}