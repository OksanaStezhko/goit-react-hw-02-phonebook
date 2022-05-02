import React from 'react';
import style from './Filter.module.css';

interface Props {
  value: string;
  onChangeFilter: (e: string) => void;
}

const Filter = ({ value, onChangeFilter }: Props) => (
  <label className={style.label} htmlFor="">
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

export default Filter;
