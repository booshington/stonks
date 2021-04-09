import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioContainer from './PortfolioContainer';
import { userPortfolio } from './PortfolioContainer.types';


test('Noop test', () => {
  const dpEnc = "eyJtZXRhZGF0YSI6e30sInBvc2l0aW9ucyI6W3sic3ltYm9sIjoiVFNMQSIsImJ1eXMiOlt7ImRhdGUiOiJkYXRlIiwicXVhbnQiOjEsInByaWNlIjo0MjB9XX0seyJzeW1ib2wiOiJBQVBMIiwiYnV5cyI6W3siZGF0ZSI6ImRhdGUiLCJxdWFudCI6MSwicHJpY2UiOjY5NDIwfV19XX0="
  const dp:userPortfolio = JSON.parse(atob(dpEnc || "{}"))
  render(<PortfolioContainer portfolio={dp} />);
  expect(true).toBeTruthy;
});
