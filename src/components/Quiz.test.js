import React from 'react';
import { render, screen } from '@testing-library/react';
import Quiz from './Quiz';

test('renders Quiz component with a title', () => {
    render(<Quiz />);
    const titleElement = screen.getByText(/My Questions/i);
    expect(titleElement).toBeInTheDocument();
});
