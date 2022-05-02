import React from 'react';
import ContactListItem from '../ContactListItem';
import style from './ContactList.module.css';
import { TContact } from '../ts';

interface Props {
  contactList: TContact[];
  onDeleteContact: (x: string) => void;
}
const ContactList = ({ contactList, onDeleteContact }: Props) => {
  return (
    <ul className={style.list}>
      {contactList.map(elem => (
        <ContactListItem
          key={elem.id}
          item={elem}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
