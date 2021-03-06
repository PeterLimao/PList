import Actions from 'actions';
import Mutations from 'mutations';
import State from 'state';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: State,
    mutations: Mutations,
    actions: Actions
});
