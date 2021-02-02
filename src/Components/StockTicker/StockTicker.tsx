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
            company: util.defaultState.company,
            metrics: util.defaultState.metrics,
            calculated: util.defaultState.calculated,
        };
    }

    componentDidMount(){
      
        //https://github.com/Finnhub-Stock-API/finnhub-js
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = Config.sandboxApiKey
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.quote(this.state.symbol, (error:any, data:FinnHubQuote, response:any) => {
            //console.log(data)
            data ? this.setState({data: data}) : console.log("data no")
        });
        
        //This information is contained in the Fidelity .csv download
        finnhubClient.companyProfile2({'symbol': this.state.symbol}, (error:any, data:any, response:any) => {
            //console.log(data)
            data ? this.setState({company: data}) : console.log("company no")
        });
        //Additional information that could be considered optional (52 week range, etc,)
        finnhubClient.companyBasicFinancials(this.state.symbol, "all", (error:any, data:any, response:any) => {
            //console.log(data)
            data ? this.setState({metrics: data}) : console.log("metrics no")
        });
    }

    render() {
        return (
            <tr>
              <td className="col s3">
                  { this.state.symbol }
              </td>
              <td className="col s3">
                  { this.state.metrics.metric['52WeekLow'] } - { this.state.metrics.metric['52WeekHigh'] }
              </td>
              <td className="col s3">
                  Current Price: { this.state.data.c }
              </td>
              <td className="col s3">
                  Day's Gain: { Number((((this.state.data.c / this.state.data.pc) - 1) * 100).toPrecision(2)) }%
              </td>
            </tr>
        )
    }
}

export default StockTicker;