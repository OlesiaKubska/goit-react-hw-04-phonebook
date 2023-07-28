import React from 'react';
import { SectionWrapper, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <SectionWrapper>
            <Title>{title}</Title>
            {children}
        </SectionWrapper>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};