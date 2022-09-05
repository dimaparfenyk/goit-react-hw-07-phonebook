import { useState } from "react";
import { useGetContactsQuery, useAddContactMutation } from "components/redux/features/contactSlice";
import { nanoid } from 'nanoid';

import { Button, Container, Label, FormInput} from "./ContactForm.styled";

export function ContactForm() {
    const [ name, setName ] = useState('');
    const [phone, setPhone] = useState('');
    const { data: contacts } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();
   
    const nameInputId = nanoid();
    const phoneInputId = nanoid();
  
   const handleChange = e => {
        const { name, value } = e.currentTarget;
    
       switch (name) {
           case 'name':
               setName(value)
               break;
           
           case 'phone':
               setPhone(value)
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
            phone,
        });
        setName('');
        setPhone('');
    };

    const setContact = value => {
        if (contacts.every(({ name }) =>
            name.toLowerCase() !== value.name.toLowerCase())) {
            addContact(value);
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
                <Label htmlFor={phoneInputId}>Number
                    <FormInput
                        type="tel"
                        name="phone"
                        id={phoneInputId}
                        value={phone}
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
}; 

