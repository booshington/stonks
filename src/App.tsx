import React from 'react';
import './App.css';
import PortfolioContainer from './Components/PortfolioContainer/PortfolioContainer';
import { defaultProps } from './Components/PortfolioContainer/util';

const defaultPortfolio = {
  metadata:{

  },
  positions:[
      {
          id: 1,
          symbol: "TSLA",
          buys:[
              {
                  id: 1,
                  date: "date",
                  quant: 1,
                  price: 420,
              },
          ],
      }
  ]
}

function App() {
  return ( //TODO: parse URL portfolio
    <PortfolioContainer portfolio={defaultPortfolio}/>
  );
}

export default App;
