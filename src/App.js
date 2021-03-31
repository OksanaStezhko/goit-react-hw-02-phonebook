import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+380505955555' },
      { id: 'id-2', name: 'Hermione Kline', number: '+380679444544' },
      { id: 'id-3', name: 'Eden Clements', number: '+380689555555' },
      { id: 'id-4', name: 'Annie Copeland', number: '+380959555555' },
    ],
    filter: '',
  };

  handleAddContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedContactName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContactName),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmitForm={this.handleAddContact} />
        <Filter
          value={this.state.filter}
          onChangeFilter={this.handleChangeFilter}
        />
        <h2>Contacts</h2>
        <ContactList
          contactList={visibleContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
