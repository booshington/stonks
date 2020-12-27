import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioContainer from './PortfolioContainer';


test('Noop test', () => {
  render(<PortfolioContainer />);
  expect(true).toBeTruthy;
});
