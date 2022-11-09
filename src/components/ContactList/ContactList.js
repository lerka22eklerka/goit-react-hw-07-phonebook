import { ContactPerson } from "components/ContactPerson/ContactPerson";
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, getItems} from 'redux/selectors';
import { Loader } from "components/Loader/Loader";

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(contact => {
    const { userName } = contact.name;
   return userName.toLowerCase().includes(filter.toLowerCase());
  });
      
  

    return (
      <List>
        <Loader/>
        {contacts &&
          filterContacts.map(contact => (
            <ContactPerson
              key={contact.id}
              id={contact.id}
              contact={contact.name}
            />
          ))}
      </List>
    );
}

export default ContactList;