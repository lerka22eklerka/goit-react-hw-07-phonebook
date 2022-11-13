import  ContactForm  from "./ContactForm/ContactForm";
import  ContactList  from "./ContactList/ContactList";
import { Section } from "./Section/Section";
import { Filter } from './Filter/Filter';
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { Loader } from "./Loader/Loader";



export const App = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Loader/>
         <ContactList />
      </Section>
    </>
  );
};
