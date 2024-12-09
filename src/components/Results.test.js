import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Results from './Results';

test('renders Results page with score', () => {
    render(
        <MemoryRouter initialEntries={[{ state: { score: 3, totalQuestions: 5 } }]}>
            <Results />
        </MemoryRouter>
    );
    const scoreText = screen.getByText(/Your Score: 3 \/ 5/i);
    expect(scoreText).toBeInTheDocument();
});
