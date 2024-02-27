import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuizCard from "./Card";

describe('QuizCard', () => {
  it('should render correctly', () => {
    const cardProps = {
      id: 1,
      image: 'image-url',
      title: 'Quiz Title',
      description: 'Quiz Description',
    };

    render(
      <MemoryRouter>
        <QuizCard {...cardProps} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('cardWrapper')).toBeInTheDocument();
  })
})
