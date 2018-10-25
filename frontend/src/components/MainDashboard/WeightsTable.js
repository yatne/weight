import React from 'react';
import PropTypes from 'prop-types';

import style from './weightsTable.scss';

const WeightTable = props => (
  <table className={style.table}>
    <tr className={style.tableHeader}>
      <th>Data</th>
      <th>Grubość</th>
    </tr>
    {props.weights.map(weight => (
      <tr>
        <td>{weight.date}</td>
        <td>{weight.weight}</td>
      </tr>
    ))}
  </table>
);


WeightTable.propTypes = {
  weights: PropTypes.array.isRequired,
};

export default WeightTable;
