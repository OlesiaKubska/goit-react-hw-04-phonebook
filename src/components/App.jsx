import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import contactsData from "./contacts.json"
import { Section } from "./Section/Section";
import { Header } from "./Header/Header";
import { AppContainer } from "./AppContainer/AppContainer";

export class App extends Component {
  state = {
    contacts: contactsData,
    filter: "",
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");
    // console.log(storedContacts);
    const parsedContacts = JSON.parse(storedContacts);
    if (!parsedContacts) return;
    this.setState({ contacts: parsedContacts });
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    // console.log(prevState.contacts);
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const normalizedFilter = name.toLowerCase();
    const isContactExist = this.state.contacts.some(contact => contact.name.toLowerCase() === normalizedFilter);

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    
    const newContact = { name, number, id: nanoid() };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    
    return (
      <AppContainer>
        <Section title="Phone Book">
          <ContactForm addContact={this.addContact} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
        </Section>
      </AppContainer>
    );
  }
}
