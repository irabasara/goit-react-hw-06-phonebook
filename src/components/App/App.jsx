import css from './app.module.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'redux/filterSlice';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filters);
  const onContactFormSubmit = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const changeFilter = e => {
    dispatch(getFilters(e.target.value));
  };

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContact = getFilteredContact();

  return (
    <div className={css.phonebook}>
      <div className={css.section}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={onContactFormSubmit} />
      </div>
      <div className={`${css.section} ${css.contactSection}`}>
        <h2>Contacts</h2>
        <Filter value={filterValue} onChange={changeFilter} />
        <ContactList contacts={filteredContact} />
      </div>
    </div>
  );
};
