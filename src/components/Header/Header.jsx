import React from 'react';
import { HeaderWrapper } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
    return (
        <HeaderWrapper>
            <h1>{title}</h1>
        </HeaderWrapper>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};