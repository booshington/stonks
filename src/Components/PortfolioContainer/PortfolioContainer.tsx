import React from 'react';
import StockTicker from '../StockTicker/StockTicker';
import { PortfolioContainerProps, PortfolioContainerState} from './PortfolioContainer.types';
import * as util from './util'

/**
 * Takes in, or retrieves, a list of ticker symbols.
 * 
 * Iterates through them, retrieving API information and storing in the local state
 * Stores in a json with the key being the ticker symbol and the value being a json of information
 * 
 * json is iterated over and stockticker components are made with the api retrieved information
 */
class PortfolioContainer extends React.Component<PortfolioContainerProps, PortfolioContainerState>{
    constructor(props: PortfolioContainerProps) {
        super(props);
        this.state = {
            symbols: util.defaultProps.symbols, //TODO: fetch symbols
            data: util.defaultProps.data,
        };
    }
    render() {
        return (
        <div>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th className="col s3">Symbol</th>
                        <th className="col s3">52-Week Range</th>
                        <th className="col s3">Current Price</th>
                        <th className="col s3">Day's Gain</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.symbols.map((value:any, index:any, array:any) => {
                        return <StockTicker key={index} symbol={value} />
                    })}
                </tbody>
            </table>
        </div>
    )
        }
}

export default PortfolioContainer;