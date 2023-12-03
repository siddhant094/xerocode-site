import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { it } from 'node:test';
import Section1 from '../../src/components/section1';

describe('Dashboard page section 1', () => {
    it('should render properly', () => {
        render(<Section1 />);
        // const header = screen.getByRole('heading');
        const header = screen.getByTestId('s1-text');
        const headerText = 'Build your audience';
        expect(header).toHaveTextContent(headerText);
    });

    it('should render properly', () => {
        render(<Section1 />);
        // const header = screen.getByRole('heading');
        const header = screen.getByTestId('s1-text2');
        const headerText =
            'no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.';
        expect(header).toHaveTextContent(headerText);
    });
});
