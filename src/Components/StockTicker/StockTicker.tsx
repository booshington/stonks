import { render } from '@testing-library/react';
import React from 'react';
import { FinnHubQuote, StockTickerProps, StockTickerState, FinnHubCompanyProfile2, FinnHubBasicFinancials, FinnHubCalculated } from './StockTicker.types';
import * as Config from '../../Config';
import * as util from './util';

class StockTicker extends React.Component<StockTickerProps, StockTickerState>{
    constructor(props: StockTickerProps) {
        super(props);
        this.state = {
            position: props.position,
            //symbol: props.symbol,
            /*data: {},
            company: {},
            metrics: {},
            calculated: {},*/
        };
    }

    company = {}
    metrics = {}
    calculated = {}
    data:FinnHubQuote = {
        o:0,
        h:0,
        l:0,
        c:0,
        pc:0,
    }
    // company: FinnHubCompanyProfile2 = {

    // }
    // metrics: FinnHubBasicFinancials = {

    // }
    // calculated: FinnHubCalculated = {
        
    // }

    componentDidMount(){
      
        //https://github.com/Finnhub-Stock-API/finnhub-js
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = Config.sandboxApiKey
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.quote(this.state.position.symbol, (error:any, data:FinnHubQuote, response:any) => {
            //console.log(data)
            //data ? this.setState({data: data}) : console.log("data no")
            data ? this.data = data : console.log("data no")
        });
        
        //This information is contained in the Fidelity .csv download
        finnhubClient.companyProfile2({'symbol': this.state.position.symbol}, (error:any, data:any, response:any) => {
            //console.log(data)
            //data ? this.setState({company: data}) : console.log("company no")
            data ? this.company = data : console.log("company no")
        });
        //Additional information that could be considered optional (52 week range, etc,)
        finnhubClient.companyBasicFinancials(this.state.position.symbol, "all", (error:any, data:any, response:any) => {
            //console.log(data)
            //data ? this.setState({metrics: data}) : console.log("metrics no")
            data ? this.metrics = data : console.log("metrics no")
        });
    }

    render() {
        return (
            <tr>
              <td className="col s3">
                  { this.state.position.symbol }
              </td>
              {/* <td className="col s3">
                  { this.metrics.metric['52WeekLow'] } - { this.metrics.metric['52WeekHigh'] }
              </td> */}
              <td className="col s3">
                  Current Price: { this.data.c }
              </td>
              <td className="col s3">
                  Day's Gain: { Number((((this.data.c / this.data.pc) - 1) * 100).toPrecision(2)) }%
              </td>
            </tr>
        )
    }
}

export default StockTicker;