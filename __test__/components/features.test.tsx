import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Features from '../../src/components/features';

describe('Dashboard page section 1', () => {
    it('should render properly', () => {
        render(<Features />);
        const header = screen.getByTestId('features-text');
        const headerText = 'Infra Creation';
        expect(header).toHaveTextContent(headerText);
    });

    it('should render properly', () => {
        render(<Features />);
        const header = screen.getByTestId('features-text2');
        const headerText = 'With Xerocodee';
        expect(header).toHaveTextContent(headerText);
    });
});
