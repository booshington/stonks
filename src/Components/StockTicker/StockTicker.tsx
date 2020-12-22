import { render } from '@testing-library/react';
import React from 'react';
import { StockTickerProps, StockTickerState } from './StockTicker.types';

class StockTicker extends React.Component<StockTickerProps, StockTickerState>{
    constructor(props: StockTickerProps) {
        super(props);
        this.state = {
            symbol: props.symbol,   
        };
    }

    render() {
        return (
        <div>
            <p>
                { this.state.symbol }
            </p>
        </div>
        )
    }
}

export default StockTicker;