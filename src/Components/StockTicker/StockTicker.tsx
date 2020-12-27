import { render } from '@testing-library/react';
import React from 'react';
import { StockTickerProps, StockTickerState } from './StockTicker.types';
import * as Config from '../../Config';

class StockTicker extends React.Component<StockTickerProps, StockTickerState>{
    constructor(props: StockTickerProps) {
        super(props);
        this.state = {
            symbol: props.symbol,   
        };
    }

    componentDidMount(){
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = Config.apiKey
        const finnhubClient = new finnhub.DefaultApi()
        //TODO: Replace error, data, and response types from any to their proper types
        finnhubClient.stockCandles(this.state.symbol, "D", 1590988249, 1591852249, {}, (error:any, data:any, response:any) => {
            console.log(data)
        });
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