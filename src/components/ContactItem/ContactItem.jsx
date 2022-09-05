import { ListItem,SubText, Text, Button} from "components/ContactList/ContactList.styled"
import { useDeleteContactMutation } from "components/redux/features/contactSlice"

export const ContactListItem = ({ name, phone,id }) => { 
    const [deleteContact, result] = useDeleteContactMutation();
   console.log(result)
    return(<ListItem >
                <SubText>{name}:</SubText>
                <Text>{phone}</Text>
        <Button
            type='button'
            onClick={() => deleteContact(id)}>Удалить
        </Button>  
            </ListItem>)
}