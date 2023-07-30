import { useDispatch } from 'react-redux';
import css from './contactList.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={css.contactsItem}>
            <p>{`${name} : ${number}`}</p>
            <button onClick={() => dispatch(deleteContact(id))}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
