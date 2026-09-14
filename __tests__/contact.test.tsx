import { render, screen } from '@testing-library/react';
import Contact from '@/sections/contact';

describe('Contact Section', () => {
  test('renders contact form', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('displays contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
    expect(screen.getByText(/contact information/i)).toBeInTheDocument();
  });
});