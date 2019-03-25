import axios from 'axios';
import apiCall from './api.js';
let promisse = {
  error: {
    status: false,
    erro: null
  },
  result: null
};

const requestUser = user => {
  return apiCall({ url: 'auth', data: user, method: 'POST' })
    .then(res => {
      console.log(res);
      const token = res.token;
      localStorage.setItem('user-token', token);
      // Add the following line:
      axios.defaults.headers.common['Authorization'] = token;
      promisse.result = token;
      return promisse;

      // dispatch('USER_REQUEST');
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      localStorage.removeItem('user-token');
      return promisse;
    });
};

const requestAccount = id => {
  return apiCall({ url: 'user/me/' + id })
    .then(res => {
      promisse.result = res;
      return promisse;
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      return promisse;
    });
};

export default {
  requestUser,
  requestAccount
};
