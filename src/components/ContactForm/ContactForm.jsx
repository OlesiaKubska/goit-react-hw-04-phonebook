import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
    Form,
    Label,
    Input,
    Button,
} from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(formData.name, formData.number);
        setFormData({ name: '', number: '' });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <Label>
                    Name
                </Label>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Za-яА-Я]+(([' \-][a-npm install --save-dev @babel/plugin-proposal-private-property-in-objectzA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </Label>
            <Label>
                <Label>
                    Number
                </Label>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={formData.number}
                    onChange={handleChange}
                />
            </Label>
            <Button type="submit">Add Contact</Button>
        </Form>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};