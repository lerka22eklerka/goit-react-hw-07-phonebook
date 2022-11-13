import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { BtnDelete, ContactBox, ContactStyled } from './ContactPerson.styled';

export const ContactPerson = (contact) => {
  const dispatch = useDispatch();
console.log(contact);
  return (
    <li>
      <ContactBox>
        <ContactStyled>
          {contact.name}: {contact.phone}
        </ContactStyled>
        <BtnDelete onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </BtnDelete>
      </ContactBox>
    </li>
  );
};

ContactPerson.propTypes = {
  id: PropTypes.string.isRequired,
  contacts: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};