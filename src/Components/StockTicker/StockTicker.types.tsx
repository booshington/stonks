export type StockTickerProps = {
    symbol: string,
  }

  export type StockTickerState = {
    symbol: string,
    data: FinnHubQuote,
    company: FinnHubCompanyProfile2,
    metrics: FinnHubBasicFinancials,
    calculated: FinnHubCalculated,
  }

  /*
    Calculated values from portfolio values / finnhub data
  */
  export type FinnHubCalculated = {
    gainLoss:{
      total:{
        dollar:number;
        percent:number;
      };
      today:{
        dollar:number;
        percent:number;
      };
    };
    currVal:number;
    quantity:number;
    costBasis:{
      perShare:number;
      total:number;
    };
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

  export type FinnHubMetrics = {
    "10DayAverageTradingVolume":number | null;
    "13WeekPriceReturnDaily":number | null;
    "26WeekPriceReturnDaily":number | null;
    "3MonthAverageTradingVolume":number | null;
    "52WeekHigh":number | null;
    "52WeekHighDate":string | null;
    "52WeekLow":number | null;
    "52WeekLowDate":string | null;
    "52WeekPriceReturnDaily":number | null;
    "5DayPriceReturnDaily":number | null;
    "assetTurnoverAnnual":number | null;
    "assetTurnoverTTM":number | null;
    "beta":number | null;
    "bookValuePerShareAnnual":number | null;
    "bookValuePerShareQuarterly":number | null;
    "bookValueShareGrowth5Y":number | null;
    "capitalSpendingGrowth5Y":number | null;
    "cashFlowPerShareAnnual":number | null;
    "cashFlowPerShareTTM":number | null;
    "cashPerSharePerShareAnnual":number | null;
    "cashPerSharePerShareQuarterly":number | null;
    "currentDividendYieldTTM":number | null;
    "currentEv/freeCashFlowAnnual":number | null;
    "currentEv/freeCashFlowTTM":number | null;
    "currentRatioAnnual":number | null;
    "currentRatioQuarterly":number | null;
    "dividendGrowthRate5Y":number | null;
    "dividendPerShare5Y":number | null;
    "dividendPerShareAnnual":number | null;
    "dividendYield5Y":number | null;
    "dividendYieldIndicatedAnnual":number | null;
    "dividendsPerShareTTM":number | null;
    "ebitdPerShareTTM":number | null;
    "ebitdaCagr5Y":number | null;
    "ebitdaInterimCagr5Y":number | null;
    "epsBasicExclExtraItemsAnnual":number | null;
    "epsBasicExclExtraItemsTTM":number | null;
    "epsExclExtraItemsAnnual":number | null;
    "epsExclExtraItemsTTM":number | null;
    "epsGrowth3Y":number | null;
    "epsGrowth5Y":number | null;
    "epsGrowthQuarterlyYoy":number | null;
    "epsGrowthTTMYoy":number | null;
    "epsInclExtraItemsAnnual":number | null;
    "epsInclExtraItemsTTM":number | null;
    "epsNormalizedAnnual":number | null;
    "focfCagr5Y":number | null;
    "freeCashFlowAnnual":number | null;
    "freeCashFlowPerShareTTM":number | null;
    "freeCashFlowTTM":number | null;
    "freeOperatingCashFlow/revenue5Y":number | null;
    "freeOperatingCashFlow/revenueTTM":number | null;
    "grossMargin5Y":number | null;
    "grossMarginAnnual":number | null;
    "grossMarginTTM":number | null;
    "inventoryTurnoverAnnual":number | null;
    "inventoryTurnoverTTM":number | null;
    "longTermDebt/equityAnnual":number | null;
    "longTermDebt/equityQuarterly":number | null;
    "marketCapitalization":number | null;
    "monthToDatePriceReturnDaily":number | null;
    "netDebtAnnual":number | null;
    "netDebtInterim":number | null;
    "netIncomeEmployeeAnnual":number | null;
    "netIncomeEmployeeTTM":number | null;
    "netInterestCoverageAnnual":number | null;
    "netInterestCoverageTTM":number | null;
    "netMarginGrowth5Y":number | null;
    "netProfitMargin5Y":number | null;
    "netProfitMarginAnnual":number | null;
    "netProfitMarginTTM":number | null;
    "operatingMargin5Y":number | null;
    "operatingMarginAnnual":number | null;
    "operatingMarginTTM":number | null;
    "payoutRatioAnnual":number | null;
    "payoutRatioTTM":number | null;
    "pbAnnual":number | null;
    "pbQuarterly":number | null;
    "pcfShareTTM":number | null;
    "peBasicExclExtraTTM":number | null;
    "peExclExtraAnnual":number | null;
    "peExclExtraHighTTM":number | null;
    "peExclExtraTTM":number | null;
    "peExclLowTTM":number | null;
    "peInclExtraTTM":number | null;
    "peNormalizedAnnual":number | null;
    "pfcfShareAnnual":number | null;
    "pfcfShareTTM":number | null;
    "pretaxMargin5Y":number | null;
    "pretaxMarginAnnual":number | null;
    "pretaxMarginTTM":number | null;
    "priceRelativeToS&P50013Week":number | null;
    "priceRelativeToS&P50026Week":number | null;
    "priceRelativeToS&P5004Week":number | null;
    "priceRelativeToS&P50052Week":number | null;
    "priceRelativeToS&P500Ytd":number | null;
    "psAnnual":number | null;
    "psTTM":number | null;
    "ptbvAnnual":number | null;
    "ptbvQuarterly":number | null;
    "quickRatioAnnual":number | null;
    "quickRatioQuarterly":number | null;
    "receivablesTurnoverAnnual":number | null;
    "receivablesTurnoverTTM":number | null;
    "revenueEmployeeAnnual":number | null;
    "revenueEmployeeTTM":number | null;
    "revenueGrowth3Y":number | null;
    "revenueGrowth5Y":number | null;
    "revenueGrowthQuarterlyYoy":number | null;
    "revenueGrowthTTMYoy":number | null;
    "revenuePerShareAnnual":number | null;
    "revenuePerShareTTM":number | null;
    "revenueShareGrowth5Y":number | null;
    "roaRfy":number | null;
    "roaa5Y":number | null;
    "roae5Y":number | null;
    "roaeTTM":number | null;
    "roeRfy":number | null;
    "roeTTM":number | null;
    "roi5Y":number | null;
    "roiAnnual":number | null;
    "roiTTM":number | null;
    "tangibleBookValuePerShareAnnual":number | null;
    "tangibleBookValuePerShareQuarterly":number | null;
    "tbvCagr5Y":number | null;
    "totalDebt/totalEquityAnnual":number | null;
    "totalDebt/totalEquityQuarterly":number | null;
    "totalDebtCagr5Y":number | null;
    "yearToDatePriceReturnDaily":number | null;
}

  export type FinnHubBasicFinancials = {
    symbol:string;
    metricType:string;
    metric:FinnHubMetrics;
  }