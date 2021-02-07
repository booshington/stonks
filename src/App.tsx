import React from 'react';
import './App.css';
import PortfolioContainer from './Components/PortfolioContainer/PortfolioContainer';
import { userPortfolio } from './Components/PortfolioContainer/PortfolioContainer.types';
import { defaultProps } from './Components/PortfolioContainer/util';

function App() {

  const defaultInput = "eyJtZXRhZGF0YSI6e30sInBvc2l0aW9ucyI6W3sic3ltYm9sIjoiRlVOIiwiYnV5cyI6W3siZGF0ZSI6ImRhdGUiLCJxdWFudCI6MSwicHJpY2UiOjQyMH1dfSx7InN5bWJvbCI6IkRBTksiLCJidXlzIjpbeyJkYXRlIjoiZGF0ZSIsInF1YW50IjoxLCJwcmljZSI6Njk0MjB9XX1dfQ=="
  const portfolioString = atob(defaultInput)
  console.log(portfolioString)
  console.log(typeof portfolioString)
  const temp = {"metadata":{},"positions":[{"symbol":"FUN","buys":[{"date":"date","quant":1,"price":420}]},{"symbol":"DANK","buys":[{"date":"date","quant":1,"price":69420}]}]}
  const defaultPortfolio:userPortfolio = JSON.parse(portfolioString)
  console.log(defaultPortfolio)
  return ( //TODO: parse URL portfolio
    <PortfolioContainer portfolio={defaultPortfolio}/>
  );
}

export default App;
