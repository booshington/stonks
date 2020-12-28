export type StockTickerProps = {
    symbol: string,
  }

  export type StockTickerState = {
    symbol: string,
    data: FinnHubQuote,
    company: FinnHubCompanyProfile2,
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

  export type FinnHubCompanyProfile2 = {
    country: string,
    currency: string,
    exchange: string,
    ipo: string,
    marketCapitalization: number,
    name: string,
    phone: string,
    shareOutstanding: number,
    ticker: string,
    weburl: string,
    logo: string,
    finnhubIndustry: string,
  }