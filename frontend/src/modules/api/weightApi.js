import moment from 'moment';
import fetch from 'isomorphic-fetch';

export function fetchWeights(from, to) {
  return fetch(`http://192.168.0.21:8080/weights
?dateFrom=${moment(from).format('YYYY-MM-DD')}
&dateTo=${moment(to).format('YYYY-MM-DD')}
  `)
    .then(res => res.json());
}

export function fetchThisMonthsWeights() {
  return fetch('http://192.168.0.21:8080/weights')
    .then(res => res.json());
}

export function addWeight(date, weight) {
  return fetch(
    'http://192.168.0.21:8080/weights',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ date, weight }),
    },
  );
}
