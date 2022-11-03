import { HeaderStyled } from "./Header.styled";

const Header = (props) => {
    return (
        <HeaderStyled>{props.children}</HeaderStyled>
    );
     
}
 
export default Header