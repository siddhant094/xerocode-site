import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Xerocodeway from '../../src/components/xerocodeway';

describe('Dashboard page section 1', () => {
    it('should render properly', () => {
        render(<Xerocodeway />);
        const header = screen.getByTestId('code-text');
        const headerText = 'Self Serve Infrastructure';
        expect(header).toHaveTextContent(headerText);
    });

    it('should render properly', () => {
        render(<Xerocodeway />);
        const header = screen.getByTestId('code-text2');
        const headerText = 'Multiple runtimes';
        expect(header).toHaveTextContent(headerText);
    });
});
