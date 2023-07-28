import React from "react";
import PropTypes from 'prop-types';
import {
    FilterContainer,
    FilterLabel,
    FilterInput,
} from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <FilterContainer>
            <FilterLabel>
                Find contacts by name
            </FilterLabel>
            <FilterInput type="text" value={value} onChange={onChange} />
            
        </FilterContainer>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};