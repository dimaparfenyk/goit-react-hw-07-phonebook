import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { nanoid } from 'nanoid'

import { Button, Container, Label, FormInput} from "./ContactForm.styled";
import { addContact } from "components/redux/features/contactSlice";

export function ContactForm() {
    const [ name, setName ] = useState('');
    const [number, setNumber] = useState('');
    
    const contacts = useSelector(state => state.contacts.contacts);

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const dispatch=useDispatch()
  
   const handleChange = e => {
        const { name, value } = e.currentTarget;
    
       switch (name) {
           case 'name':
               setName(value)
               break;
           
           case 'number':
               setNumber(value)
               break; 
           
           default:
               return;
       }
    };

    const  handleSubmit = e => {
        e.preventDefault();
        
        setContact({
                    id: nanoid(),
                    name,
                    number
                })

        setName('');
        setNumber('');
    };

    const setContact = value => {
        if (contacts.every(({ name }) =>
            name.toLowerCase() !== value.name.toLowerCase())) {
            dispatch(addContact(value))
        } else {
            alert(`${value.name} is already in contacts`);
        }
    };
    
    return (
            <form onSubmit={handleSubmit}>
                <Container>
                <Label htmlFor={nameInputId}>Name
                    <FormInput
                        type="text"
                        name="name"
                        id={nameInputId}
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label htmlFor={numberInputId}>Number
                    <FormInput
                        type="tel"
                        name="number"
                        id={numberInputId}
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
        
                <Button type="submit"> Add Contact </Button>
                
            </Container>
            </form>
        );
} 

