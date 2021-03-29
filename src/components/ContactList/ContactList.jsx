import React from 'react';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, ...dataContact }) => (
        <ContactListItem
          key={id}
          id={id}
          listItem={Object.values(dataContact)}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
