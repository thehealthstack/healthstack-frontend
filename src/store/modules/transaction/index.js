import axios from 'axios';
import constants from '@/helpers/constants';

const state = {
  transactions: [],
};


const mutations = {
  UPDATE_TRANSACTIONS(state, payload) {
    state.transactions = payload;
  },
};

const actions = {
  getTransactions({ commit }) {
    axios({
      method: 'get',
      url: `${constants.BASE_URL}/transactions`,
      withCredentials: true,
    })
      .then((res) => {
        commit('UPDATE_TRANSACTIONS', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

const getters = {
  transactions: state => state.transactions,
};

const transactionModule = {
  state,
  mutations,
  actions,
  getters,
};

export default transactionModule;
