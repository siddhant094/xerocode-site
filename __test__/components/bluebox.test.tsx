import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bluebox from '../../src/components/bluebox';

describe('Dashboard page section 1', () => {
    it('should render properly', () => {
        render(<Bluebox />);
        const header = screen.getByTestId('blue-text');
        const headerText = 'Modernize apps, infrastructure';
        expect(header).toHaveTextContent(headerText);
    });

    it('should render properly', () => {
        render(<Bluebox />);
        const header = screen.getByTestId('blue-text2');
        const headerText = 'Collaborative workflows';
        expect(header).toHaveTextContent(headerText);
    });
});
