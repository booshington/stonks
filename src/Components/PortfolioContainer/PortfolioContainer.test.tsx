import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioContainer from './PortfolioContainer';
import { userPortfolio } from './PortfolioContainer.types';


test('Noop test', () => {
  const dpEnc = "eyJtZXRhZGF0YSI6e30sInBvc2l0aW9ucyI6W3sic3ltYm9sIjoiQVNERiIsImJ1eXMiOlt7ImRhdGUiOiJkYXRlIiwicXVhbnQiOjEsInByaWNlIjo0MjB9XX0seyJzeW1ib2wiOiJPVEhFUiIsImJ1eXMiOlt7ImRhdGUiOiJkYXRlIiwicXVhbnQiOjEsInByaWNlIjo2OTQyMH1dfV19"
  const dp:userPortfolio = JSON.parse(atob(dpEnc || "{}"))
  render(<PortfolioContainer portfolio={dp} />);
  expect(true).toBeTruthy;
});
