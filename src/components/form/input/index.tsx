import React from "react";
import './input.css';

type InputProps = {
    name: string,
    value: string,
    onChange?: (a: string) => void,
};

const Input: React.FC<InputProps> = ({ name, value, onChange }) => (
    <input className="form-input" name={name} value={value} onChange={(e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }} />
);

export default Input;
