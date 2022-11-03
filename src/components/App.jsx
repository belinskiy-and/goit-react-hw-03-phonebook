import { Component } from "react";
import { nanoid } from 'nanoid'
import Box from "./Box";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Header from "./Header";
import Filter from "./Filter";


const LS_NAME = "Phonebook_contacts";

export class App extends Component {
  // State
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactArray = JSON.parse(localStorage.getItem(LS_NAME));

    if (contactArray) {
      this.setState({contacts: [...contactArray]});
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_NAME, JSON.stringify(this.state.contacts));
    }
  }

  // Methods
  isIncludes = value =>
    this.state.contacts.find(contact => contact.name.toLowerCase() === value.toLowerCase());      
  
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  formSubmitHandle = ({ name, number }) => {
    if (this.isIncludes(name)) {
      alert(`${name} is olready in contacts`);
     } else {
      const id = nanoid(); 
      this.setState(prevState => ({                   
        contacts: [...prevState.contacts, {id, name, number}],      
      }));
    }  
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  // Render
  render() {

    const { contacts, filter} = this.state;

    const normalizeFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizeFilter));

    return (
      <Box 
        m={5}
        width="width"        
        as='main'
      >
        <Header>Phonebook</Header>
        <ContactForm onSubmit={this.formSubmitHandle} />
        <Header>Contacts</Header>
        <Filter filter={filter} onChange={this.handleInputChange}  />
        <Contacts contacts={visibleContacts} handleDelete={this.deleteContact} />
      </Box>
    );
  };
};
