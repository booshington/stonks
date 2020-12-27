export type StockTickerProps = {
    symbol: string,
  }

  export type StockTickerState = {
    symbol: string,
    data: FinnHubQuote,
  }

  export type FinnHubQuote = {
    o:Number;
    h:Number;
    l:Number;
    c:Number;
    pc:Number;
  }