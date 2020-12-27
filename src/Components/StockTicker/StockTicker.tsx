import { render } from '@testing-library/react';
import React from 'react';
import { FinnHubQuote, StockTickerProps, StockTickerState } from './StockTicker.types';
import * as Config from '../../Config';
import * as util from './util';

class StockTicker extends React.Component<StockTickerProps, StockTickerState>{
    constructor(props: StockTickerProps) {
        super(props);
        this.state = {
            symbol: props.symbol,
            data: util.defaultState.data,
        };
    }

    componentDidMount(){
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = Config.apiKey
        const finnhubClient = new finnhub.DefaultApi()
        //TODO: Replace error, data, and response types from any to their proper types
        /*finnhubClient.stockCandles(this.state.symbol, "D", "2020-12-24", "2020-12-24", {}, (error:any, data:any, response:any) => {
            console.log(data)
        });*/
        finnhubClient.quote(this.state.symbol, (error:any, data:FinnHubQuote, response:any) => {
            console.log(data)
            this.setState({data: data})
        });
    }

    render() {
        return (
        <div>
            <p>
                { this.state.symbol }
            </p>
            <p>
                Prev Close: { this.state.data.pc }
            </p>
        </div>
        )
    }
}

export default StockTicker;