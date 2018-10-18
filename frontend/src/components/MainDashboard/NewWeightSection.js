import React from 'react';

import { DateInput, NumInput } from '../common/Input';
import style from './addNewWeightSection.scss';

class NewWeightSection extends React.Component {
  render() {
    return (
      <section className={style.newWeightSection}>
        <form className={style.newWeightForm}>
          <DateInput onChange={() => console.log('zmiana')} value={null} name="date" />
          <NumInput onChange={() => console.log('zmiana')} value={null} name="weight" />
        </form>
      </section>
    );
  }
}

export default NewWeightSection;
