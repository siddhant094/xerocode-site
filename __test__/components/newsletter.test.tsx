import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Newsletter from '../../src/components/newsletter';

describe('Dashboard page section 1', () => {
    it('should render properly', () => {
        render(<Newsletter />);
        const header = screen.getByTestId('news-text');
        const headerText = 'Our links';
        expect(header).toHaveTextContent(headerText);
    });

    it('should render properly', () => {
        render(<Newsletter />);
        const header = screen.getByTestId('news-text2');
        const headerText = 'All rights reserved';
        expect(header).toHaveTextContent(headerText);
    });
});
