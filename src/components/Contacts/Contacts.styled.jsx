import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

`;

export const DeleteButtonStyled = styled.button`
    display: inline-block;
    margin-left: auto;
    margin-right: 0;
`;

export const MdOutlineDeleteStyled = styled(MdOutlineDelete)`
    cursor: pointer;
`;
