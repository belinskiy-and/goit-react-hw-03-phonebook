import PropTypes from "prop-types";

const ContactsList = ({ contacts }) => {
    return(
        <ul>
            {contacts.map(( {id, name, number} ) => (
                    <li key={id}>{name}: {number}</li>
                )                
            )}
        </ul>
    );
}

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,    
}