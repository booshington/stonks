import { render } from '@testing-library/react';
import React from 'react';
import { FinnHubQuote, StockTickerProps, StockTickerState } from './StockTicker.types';
import * as Config from '../../Config';
import * as util from './util';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
    return { name, calories, fat, carbs, protein };
  }

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
            console.log(data)
            this.setState({data: data})
        });
        //This information is contained in the Fidelity .csv download
        finnhubClient.companyProfile2({'symbol': this.state.symbol}, (error:any, data:any, response:any) => {
            console.log(data)
            this.setState({company:data})
        });
        //Additional information that could be considered optional (52 week range, etc,)
        finnhubClient.companyBasicFinancials(this.state.symbol, "all", (error:any, data:any, response:any) => {
            console.log(data)
            this.setState({metrics:data})
        });
    }

    render() {
        const classes = useStyles();

        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
          ];

        return (
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3">
                        { this.state.symbol }
                    </div>
                    <div className="col s3">
                        { this.state.metrics.metric['52WeekLow'] } - { this.state.metrics.metric['52WeekHigh'] }
                    </div>
                    <div className="col s3">
                        Current Price: { this.state.data.c }
                    </div>
                    <div className="col s3">
                        Day's Gain: { Number((((this.state.data.c / this.state.data.pc) - 1) * 100).toPrecision(2)) }%
                    </div>
                </div>
            </div>
        )
    }
}

export default StockTicker;