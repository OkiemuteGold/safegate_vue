/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import state from "./state.js";
import * as getters from "./getters.js";
import * as mutations from "./mutations.js";
import * as actions from "./actions.js";

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // plugins: [createPersistedState({
    //     storage: window.sessionStorage,
    //     key: 'vuex',
    //     reducer(val) {
    //         if (val.isUserLoggedIn === false) { // return empty state when user logged out
    //             return {}
    //         }
    //         return val
    //     }
    // })]
});
