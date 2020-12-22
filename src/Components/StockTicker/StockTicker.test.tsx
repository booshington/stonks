import React from 'react';
import { render, screen } from '@testing-library/react';
import StockTicker from './StockTicker';


test('Noop test', () => {
  render(<StockTicker symbol={"TSLA"}/>);
  expect(true).toBeTruthy;
});
