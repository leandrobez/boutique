const access = {
  production: {
    client_id: 'Client_Id_4c23fef8afcc9095365d0620f571b97bee28767f',
    client_secret: 'Client_Secret_a28d069a65e9d6fa0a5a688ace9640ecf5e047ea',
    sandbox: false
  },
  dev: {
    client_id: 'Client_Id_5e087cf4dc7048936c6f487ebe47e8717b0f0edc',
    client_secret: 'Client_Secret_5ba9efbdfa4c6c3b270feeb62999bc33f36763e9',
    sandbox: true
  }
};

const plans = [
  {
    plan: {
      name: '1 vez por Semana',
      interval: 1,
      repeats: 12,
      id: ''
    }
  },
  {
    plan: {
      name: '2 vezes por Semana',
      interval: 1,
      repeats: 12,
      id: ''
    }
  },
  {
    plan: {
      name: '3 vezes por Semana',
      interval: 1,
      repeats: 12,
      id: ''
    }
  }
];

export default {
  access,
  plans
};
