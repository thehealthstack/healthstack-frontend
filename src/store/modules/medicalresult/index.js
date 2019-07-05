import axios from 'axios';
import constants from '@/helpers/constants';


const state = {
  medicalResults: [],
};

const mutations = {
  UPDATE_MEDICAL_RESULTS(state, payload) {
    state.medicalResults.push(payload);
  },
  UPDATE_PATIENTS(state, payload) {
    state.patients.push(payload);
  },
  GET_MEDICAL_RESULTS(state, payload) {
    state.medicalResults = payload;
  },
};

const actions = {
  createPatientUploadFiles({ dispatch }, payload) {
    axios.all([
      axios({
        method: 'post',
        url: `${constants.BASE_URL}/patients`,
        data: {
          email: payload.email,
          telephone: payload.telephone,
        },
        withCredentials: true,
      }),
      axios({
        method: 'post',
        url: `${constants.BASE_URL}/upload`,
        data: payload.formData,
        withCredentials: true,
      }),
    ])
      .then(([patient, files]) => {
        const patientData = patient.data;
        patientData.files = files.data;
        console.log(patientData);
        dispatch('createMedicalResults', {
          files: patientData.files,
          patientId: patientData.patient.patientId,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  createMedicalResults({ dispatch }, payload) {
    axios({
      method: 'post',
      url: `${constants.BASE_URL}/medicalresults`,
      data: payload,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        dispatch('getMedicalResults');
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getMedicalResults({ commit }) {
    axios({
      method: 'get',
      url: `${constants.BASE_URL}/medicalresults`,
      withCredentials: true,
    })
      .then((res) => {
        commit('GET_MEDICAL_RESULTS', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

const getters = {
  medicalResults: state => state.medicalResults,
};

const medicalResultModule = {
  state,
  mutations,
  actions,
  getters,
};

export default medicalResultModule;
