export type StockTickerProps = {
    symbol: string,
  }

  export type StockTickerState = {
    symbol: string,
    data: FinnHubQuote,
  }

  /*
    o
    Open price of the day

    h
    High price of the day

    l
    Low price of the day

    c
    Current price

    pc
    Previous close price
  */
  export type FinnHubQuote = {
    o:number;
    h:number;
    l:number;
    c:number;
    pc:number;
  }