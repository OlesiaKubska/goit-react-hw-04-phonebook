import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import contactsData from "./contacts.json"
import { Section } from "./Section/Section";
import { Header } from "./Header/Header";
import { AppContainer } from "./AppContainer/AppContainer";

export const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    // console.log(storedContacts);
    const parsedContacts = JSON.parse(storedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const normalizedFilter = name.toLowerCase();
    const isContactExist = contacts.some(contact => contact.name.toLowerCase() === normalizedFilter);

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    
    const newContact = { name, number, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <AppContainer>
      <Section title="Phone Book">
        <ContactForm addContact={addContact} />
        <Header title="Contacts" />
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </Section>
    </AppContainer>
  );
};
