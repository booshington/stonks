import React from 'react';
import StockTicker from '../StockTicker/StockTicker';

const PortfolioContainer = () => {
    return (
        <div>
            <StockTicker symbol={"TSLA"} />
        </div>
    )
}

export default PortfolioContainer;