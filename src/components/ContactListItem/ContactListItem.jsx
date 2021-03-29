import React from 'react';
import shortid from 'shortid';
const ContactListItem = ({ id, listItem, onDeleteContact }) => (
  <li>
    {listItem.map(value => (
      <span key={shortid.generate()}>{value}</span>
    ))}
    <button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);
export default ContactListItem;
