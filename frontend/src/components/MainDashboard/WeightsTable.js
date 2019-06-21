import React from 'react';
import PropTypes from 'prop-types';

import style from './weightsTable.scss';

const WeightTable = props => (
  <div className={style.tableContainer}>
    <table className={style.table}>
      <tr className={style.tableHeader}>
        <th>Data</th>
        <th>Waga</th>
      </tr>
      {props.weights.map(weight => (
        <tr className={style.tableRow}>
          <td>{weight.date}</td>
          <td>{weight.weight}</td>
        </tr>
      ))}
    </table>
  </div>
);


WeightTable.propTypes = {
  weights: PropTypes.array.isRequired,
};

export default WeightTable;
