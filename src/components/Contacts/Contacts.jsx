import PropTypes from "prop-types";
import Box from "components/Box";
import Filter from "components/Filter";
import ContactsList from "components/ContsctsList"
import { Header } from "./Contacts.styled";


const Contacts = ({ contacts, filter, onChange }) => {

    return(            
        <Box 
            width="full" 
            border="none"
            py={4}                
        >
            <Header>Contacts</Header>
            <Filter filter={filter} onChange={onChange}  />
            <ContactsList contacts={contacts} />
        </Box>        
    );
}

export default Contacts;

PropTypes.propTypes = {    
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}