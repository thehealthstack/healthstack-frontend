import Vue from 'vue';
import Vuex from 'vuex';
import medicalResult from './modules/medicalresult';
import transaction from './modules/transaction';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    medicalResult,
    transaction,
  },
});
