import moment from 'moment';
import fetch from 'isomorphic-fetch';

export function fetchWeights(from, to){
  return fetch('http://192.168.0.21:8080/weights')
    .then(res => res.json());
}
export function addWeight(weight, date = moment()) {

}
