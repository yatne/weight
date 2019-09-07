import moment from 'moment';
import fetch from 'isomorphic-fetch';
import properties from '../../properties';

export function fetchWeights(from, to = moment().format('YYYY-MM-DD')) {
  return fetch(`${properties.backend_url}/weights
?dateFrom=${moment(from).format('YYYY-MM-DD')}
&dateTo=${moment(to).format('YYYY-MM-DD')}
  `)
    .then(res => res.json());
}

export function fetchThisMonthsWeights() {
  return fetch(`${properties.backend_url}/weights`)
    .then(res => res.json());
}

export function fetchAllWeights() {
  return fetch(`${properties.backend_url}/weights/all`)
    .then(res => res.json());
}

export function addWeight(date, weight, password) {
  return fetch(
    `${properties.backend_url}/weights`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: password,
      },
      body: JSON.stringify({ date, weight }),
    },
  );
}
