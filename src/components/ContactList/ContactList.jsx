import React from "react";
import PropTypes from 'prop-types';
import {
    ContactListContainer,
    ContactListItem,
    DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListContainer>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id}>
                    {contact.name} - {contact.number}
                    <DeleteButton type="button" onClick={() => onDeleteContact(contact.id)}>
                        Delete
                    </DeleteButton>
                </ContactListItem>
            ))}
        </ContactListContainer>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ),
    onDeleteContact: PropTypes.func.isRequired,
};