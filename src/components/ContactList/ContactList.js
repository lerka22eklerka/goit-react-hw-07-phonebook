import { ContactPerson } from "components/ContactPerson/ContactPerson";
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilterContacts, getItems} from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(getItems);
  // console.log(contacts);   
  const filterContacts = useSelector(getFilterContacts);

    return (
      <List>
        {contacts &&
          filterContacts.map(contact => (
            <ContactPerson
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          ))}
      </List>
    );
}

export default ContactList;