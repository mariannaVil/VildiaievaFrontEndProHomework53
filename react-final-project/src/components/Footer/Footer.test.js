import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);

    expect(screen.getByText(/Facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/Twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument();

    expect(screen.getByText(/Privacy policy/)).toBeInTheDocument();
    expect(screen.getByText(/2024 Ukraine. All rights reserved/)).toBeInTheDocument();
  });

  it('should have correct links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /Facebook/i })).toHaveAttribute('href', 'https://www.facebook.com/');
    expect(screen.getByRole('link', { name: /Twitter/i })).toHaveAttribute('href', 'https://twitter.com/');
    expect(screen.getByRole('link', { name: /Instagram/i })).toHaveAttribute('href', 'https://www.instagram.com/');
  });
});
