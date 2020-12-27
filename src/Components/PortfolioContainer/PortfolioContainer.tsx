import React from 'react';
import StockTicker from '../StockTicker/StockTicker';

const PortfolioContainer = () => {
    return (
        <div>
            <StockTicker symbol={"TSLA"} />
            <StockTicker symbol={"F"} />
            <StockTicker symbol={"AAPL"} />
        </div>
    )
}

export default PortfolioContainer;