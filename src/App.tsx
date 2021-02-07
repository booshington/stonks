import React from 'react';
import './App.css';
import PortfolioContainer from './Components/PortfolioContainer/PortfolioContainer';
import { defaultProps } from './Components/PortfolioContainer/util';

function App() {
  return ( //TODO: parse URL portfolio
    <>
    <PortfolioContainer portfolio={defaultProps.portfolio}/>
    <div>
      { JSON.stringify(defaultProps.portfolio) }
    </div>
    </>
  );
}

export default App;
