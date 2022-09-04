import { ListItem,SubText, Text, Button} from "components/ContactList/ContactList.styled"

export const ContactList = () => { 
    return(<ListItem >
                <SubText>:</SubText>
                <Text></Text>
                <Button>Удалить</Button>    
            </ListItem>)
}