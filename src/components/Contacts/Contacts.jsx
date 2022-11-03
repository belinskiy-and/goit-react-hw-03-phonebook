import PropTypes from "prop-types";

import Box from "components/Box";
import { ContactItem, MdOutlineDeleteStyled } from "./Contacts.styled";

const Contacts = ({ contacts, handleDelete }) => {

    return(            
        <Box 
            width="full" 
            border="none"
            py={4}                
        >
            <ul>
                {contacts.map(( {id, name, number} ) => (
                        <ContactItem key={id}>{name}: {number} <MdOutlineDeleteStyled onClick={() => handleDelete(id)} /></ContactItem>
                    )                
                )}
            </ul>
        </Box>        
    );
}

export default Contacts;

Contacts.propTypes = {    
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    handleDelete: PropTypes.func.isRequired,
}
