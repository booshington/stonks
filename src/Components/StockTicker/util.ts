import { StockTickerState } from "./StockTicker.types";

export const defaultState:StockTickerState = {
    symbol:"TSLA",
    data: {
        o:420,
        h:420,
        l:420,
        c:420,
        pc:420,
    },
    company: {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ/NMS (GLOBAL MARKET)",
        ipo: "1980-12-12",
        marketCapitalization: 1415993,
        name: "Apple Inc",
        phone: "14089961010",
        shareOutstanding: 4375.47998046875,
        ticker: "AAPL",
        weburl: "https://www.apple.com/",
        logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
        finnhubIndustry:"Technology"
      }
}