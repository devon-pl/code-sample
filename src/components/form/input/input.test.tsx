import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

describe("Input component", () => {
    it('renders input component without onChange prop attached', () => {
        const initialInputElement = screen.queryByDisplayValue("Test");
        expect(initialInputElement).toBe(null);

        render(<Input name="Star Trek" value="Test" />);
        const inputElement = screen.queryByDisplayValue("Test");
        expect(inputElement).toBeInTheDocument();
    });
});
