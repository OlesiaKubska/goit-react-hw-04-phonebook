import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid blue;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    margin-bottom: 16px;
    border: 1px solid blue;
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    background-color: blue;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 4px;
`;