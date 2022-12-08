import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('...', () => {
    render(<Home />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
