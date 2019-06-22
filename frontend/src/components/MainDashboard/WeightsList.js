import React from 'react';
import PropTypes from 'prop-types';

import style from './weightsList.scss';

class WeightList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expandable: this.props.weights.length > 31,
      expanded: false,
    };
  }

  render() {
    return (
      <div className={style.listContainer}>
        <ul className={style.list}>
          <li className={style.listHeader}>
            <div className={style.datePart}>Data</div>
            <div className={style.weightPart}>Waga</div>
          </li>
          {this.props.weights.map(weight => (
            <li className={style.listItem}>
              <div className={style.datePart}>{weight.date}</div>
              <div className={style.weightPart}>{weight.weight}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

WeightList.propTypes = {
  weights: PropTypes.array.isRequired,
};

export default WeightList;
