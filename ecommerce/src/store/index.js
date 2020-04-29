import Vue from 'vue';
import Vuex from 'vuex';

import { product, cart } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		product,
		cart,
	}
})