import PropTypes from "prop-types";
import { Label } from './Filter.styled';

const Filter = ({ filter, onChange }) =>{
    return(
        <Label htmlFor="filter">
            Find contacts by name:
            <input 
                type="text" 
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </Label>
    );
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}