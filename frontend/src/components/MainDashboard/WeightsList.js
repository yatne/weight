/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';

import style from './weightsList.scss';

const COLLAPSE_THRESHOLD = 31;

class WeightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const { expanded } = this.state;
    const expandable = this.props.weights.length > COLLAPSE_THRESHOLD;
    return (
      <div className={style.listContainer}>
        <ul className={style.list}>
          <li className={style.listHeader}>
            <div className={style.datePart}>Data</div>
            <div className={style.weightPart}>Waga</div>
          </li>
          {this.props.weights.map((weight, index) => {
            if (index > COLLAPSE_THRESHOLD && expandable && !expanded) {
              return null;
            }
            return (
              <li className={style.listItem} key={`weight-list-item-${weight.date}`}>
                <div className={style.datePart}>{weight.date}</div>
                <div className={style.weightPart}>{weight.weight}</div>
              </li>
            );
          })}
          {expandable && (
            <li className={style.expandListItem} onClick={() => this.setState({ expanded: !expanded })}>
              {expanded ? '˄' : '˅'}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

WeightList.propTypes = {
  weights: PropTypes.array.isRequired,
};

export default WeightList;
