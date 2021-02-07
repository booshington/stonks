import React from 'react';
import './App.css';
import PortfolioContainer from './Components/PortfolioContainer/PortfolioContainer';
import { userPortfolio } from './Components/PortfolioContainer/PortfolioContainer.types';
//import { defaultProps } from './Components/PortfolioContainer/util';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const portfolio:userPortfolio = JSON.parse(atob(urlParams.get('p') || "{}"))

  return (
    <PortfolioContainer portfolio={portfolio}/>
  );
}

export default App;
