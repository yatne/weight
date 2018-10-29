import moment from 'moment';
import _ from 'lodash';

function translateWeightsToFullMonthChart(weights) {
  console.log('pupa');
  const labels = [];
  const data = [];
  const sorted = _.sortBy(weights, 'date');
  console.log(sorted);

}

translateWeightsToFullMonthChart([
  {
    date: '2018-12-01',
    weight: 88.1,
  },
  {
    date: '2018-12-02',
    weight: 55.2,
  },
  {
    date: '2018-12-06',
    weight: 55.4,
  },
  {
    date: '2018-12-04',
    weight: 55.3,
  },
]);
