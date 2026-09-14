import { render, screen } from '@testing-library/react';
import Hero from '@/sections/hero';

describe('Hero Section', () => {
  test('renders name and title', () => {
    render(<Hero />);
    
    expect(screen.getByText(/abhinav/i)).toBeInTheDocument();
    expect(screen.getByText(/amazon sde/i)).toBeInTheDocument();
  });

  test('has call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByRole('button', { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
  });
});