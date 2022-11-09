import  ContactForm  from "./ContactForm/ContactForm";
import  ContactList  from "./ContactList/ContactList";
import { Section } from "./Section/Section";
import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from "react-redux";
// import { getIsContactExist } from "redux/selectors";
// import { fetchContacts } from "redux/operations";
// import { useEffect } from "react";
import { Loader } from "./Loader/Loader";



export const App = () => {



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
