import { StockTickerState } from "./StockTicker.types";

export const defaultState:StockTickerState = {
    symbol:"TSLA",
    data: {
        o:420,
        h:420,
        l:420,
        c:420,
        pc:420,
    }
}