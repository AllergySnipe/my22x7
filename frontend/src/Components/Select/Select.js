import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectInput = ({ size, width }) => {
    return (
        <Select size={size} style={{ width: { width } }}>

        </Select>
    );
}

export default SelectInput;
