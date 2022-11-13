import { ContactPerson } from "components/ContactPerson/ContactPerson";
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, getItems} from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  console.log(contacts);

  const filterContacts = contacts.filter(contact => {
    console.log(contact.name);
   return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
      
  

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