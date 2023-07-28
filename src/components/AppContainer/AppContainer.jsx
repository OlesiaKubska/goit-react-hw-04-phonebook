import React from 'react';
import { Container } from './AppContainer.styled';
import PropTypes from 'prop-types';

export const AppContainer = ({ children }) => {
    return (
        <Container>
            <div>{children}</div>
        </Container>
    );
};

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
};