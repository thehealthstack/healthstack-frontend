import axios from 'axios';
import constants from '../../../helpers/constants';

const state = {
  organizations: [],
};


const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_ORGANIZATION(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.organizations = payload;
  },
};

const actions = {
  getOrganizations({ commit }) {
    axios.get(`${constants.BASE_URL}/organizations`)
      .then((res) => {
        commit('UPDATE_ORGANIZATION', res.data);
      });
  },
};

const getters = {
  organizations: state.organizations,
};

const organizationModule = {
  state,
  mutations,
  actions,
  getters,
};

export default organizationModule;
