import axios from 'axios';
import constants from '@/helpers/constants';
import router from '@/router';


const state = {
  labAgent: undefined,
  isLoggedIn: false,
  loggingError: undefined,
  signupSuccessStatus: false,
  signupError: undefined,
};

const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_LAB_AGENT(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.labAgent = payload;
  },
  // eslint-disable-next-line no-shadow
  UPDATE_LOGIN_STATUS(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.isLoggedIn = payload;
  },
  // eslint-disable-next-line no-shadow
  UPDATE_LOGIN_ERROR(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.loggingError = payload;
  },
  // eslint-disable-next-line no-shadow
  UPDATE_SIGNUP_STATUS(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.signupSuccessStatus = payload;
  },
  // eslint-disable-next-line no-shadow
  UPDATE_SIGNUP_ERROR(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.signupError = payload;
  },
};

const actions = {
  login({ commit }, payload) {
    axios({
      method: 'post',
      url: `${constants.BASE_URL}/login`,
      data: {
        email: payload.email,
        password: payload.password,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.data && res.status === 200) {
          console.log(res.data);
          commit('UPDATE_LAB_AGENT', res.data);
          commit('UPDATE_LOGIN_STATUS', true);
          router.push('home');
        }
      })
      .catch((err) => {
        console.log(err);
        commit('UPDATE_LOGIN_ERROR', err);
      });
  },
  signup({ commit }, payload) {
    axios
      .post(`${constants.BASE_URL}/labagents`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        telephone: payload.telephone,
        organizationId: payload.organizationId,
        password: payload.password,
      })
      .then((res) => {
        if (res.data && res.status === 200) {
          console.log(res.data);
          commit('UPDATE_LAB_AGENT', res.data);
          commit('UPDATE_SIGNUP_STATUS', true);
        }
      })
      .catch((err) => {
        console.log(err);
        commit('UPDATE_SIGNUP_ERROR', err);
      });
  },
};

const getters = {
  labAgent: state => state.labAgent,
  isLoggedIn: state => state.isLoggedIn,
  loggingError: state => state.loggingError,
  signupSuccessStatus: state => state.signupSuccessStatus,
  signupError: state => state.signupError,
};

const authModule = {
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
