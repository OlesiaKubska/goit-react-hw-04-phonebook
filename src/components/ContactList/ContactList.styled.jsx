import styled from 'styled-components';

export const ContactListContainer = styled.ul`
    list-style: square;
    padding: 0;
`;

export const ContactListItem = styled.li`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid blue;

    &:last-child {
        border-bottom: none;
    }
`;

export const DeleteButton = styled.button`
    padding: 4px 8px;
    background-color: blue;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
        background-color:  #000080;
    }
`;