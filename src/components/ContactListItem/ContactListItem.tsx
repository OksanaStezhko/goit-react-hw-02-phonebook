import React from 'react';
import shortid from 'shortid';
import style from './ContactListItem.module.css';
import { TContact } from '../ts';

interface Props {
  item: TContact;
  onDeleteContact: (x: string) => void;
}
const ContactListItem = ({ item, onDeleteContact }: Props) => {
  const listItem = Object.values(item);
  const id = item.id;
  return (
    <li className={style.item}>
      {listItem.map(value => (
        <span className={style.info} key={shortid.generate()}>
          {value}
        </span>
      ))}
      <button
        type="button"
        className={style.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactListItem;
