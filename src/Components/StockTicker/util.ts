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
      },
    metrics: {
        symbol:"TSLA",
        metricType:"all",
        metric:{
            "10DayAverageTradingVolume":48.38293,
            "13WeekPriceReturnDaily":96.80809,
            "26WeekPriceReturnDaily":245.43464,
            "3MonthAverageTradingVolume":1044.87051,
            "52WeekHigh":651.28,
            "52WeekHighDate":"2020-12-08",
            "52WeekLow":67.862,
            "52WeekLowDate":"2019-12-10",
            "52WeekPriceReturnDaily":857.02883,
            "5DayPriceReturnDaily":11.13619,
            "assetTurnoverAnnual":0.76748,
            "assetTurnoverTTM":0.71799,
            "beta":2.16754,
            "bookValuePerShareAnnual":7.31271,
            "bookValuePerShareQuarterly":16.91034,
            "bookValueShareGrowth5Y":38.1965,
            "capitalSpendingGrowth5Y":8.18008,
            "cashFlowPerShareAnnual":1.50508,
            "cashFlowPerShareTTM":2.95316,
            "cashPerSharePerShareAnnual":6.92597,
            "cashPerSharePerShareQuarterly":15.32806,
            "currentDividendYieldTTM":0,
            "currentEv/freeCashFlowAnnual":null,
            "currentEv/freeCashFlowTTM":1349.437,
            "currentRatioAnnual":1.13462,
            "currentRatioQuarterly":1.63464,
            "dividendGrowthRate5Y":null,
            "dividendPerShare5Y":null,
            "dividendPerShareAnnual":null,
            "dividendYield5Y":null,
            "dividendYieldIndicatedAnnual":null,
            "dividendsPerShareTTM":0,
            "ebitdPerShareTTM":4.0119,
            "ebitdaCagr5Y":118.1264,
            "ebitdaInterimCagr5Y":null,
            "epsBasicExclExtraItemsAnnual":-0.97401,
            "epsBasicExclExtraItemsTTM":0.56616,
            "epsExclExtraItemsAnnual":-0.97401,
            "epsExclExtraItemsTTM":0.50472,
            "epsGrowth3Y":null,
            "epsGrowth5Y":null,
            "epsGrowthQuarterlyYoy":60.99745,
            "epsGrowthTTMYoy":153.5063,
            "epsInclExtraItemsAnnual":-0.97401,
            "epsInclExtraItemsTTM":0.50472,
            "epsNormalizedAnnual":-0.83006,
            "focfCagr5Y":null,
            "freeCashFlowAnnual":968,
            "freeCashFlowPerShareTTM":1.81115,
            "freeCashFlowTTM":1827,
            "freeOperatingCashFlow/revenue5Y":-10.34128,
            "freeOperatingCashFlow/revenueTTM":6.48424,
            "grossMargin5Y":18.67445,
            "grossMarginAnnual":16.55546,
            "grossMarginTTM":21.13501,
            "inventoryTurnoverAnnual":6.15383,
            "inventoryTurnoverTTM":5.69842,
            "longTermDebt/equityAnnual":175.7933,
            "longTermDebt/equityQuarterly":66.16555,
            "marketCapitalization":616021.8,
            "monthToDatePriceReturnDaily":14.49612,
            "netDebtAnnual":7151,
            "netDebtInterim":-798,
            "netIncomeEmployeeAnnual":-16006.94,
            "netIncomeEmployeeTTM":14536.82,
            "netInterestCoverageAnnual":0.21417,
            "netInterestCoverageTTM":3.22263,
            "netMarginGrowth5Y":null,
            "netProfitMargin5Y":-7.2878,
            "netProfitMarginAnnual":-3.15323,
            "netProfitMarginTTM":2.47729,
            "operatingMargin5Y":-5.04491,
            "operatingMarginAnnual":-0.28074,
            "operatingMarginTTM":6.31034,
            "payoutRatioAnnual":null,
            "payoutRatioTTM":0,
            "pbAnnual":88.86996,
            "pbQuarterly":38.43093,
            "pcfShareTTM":206.7881,
            "peBasicExclExtraTTM":757.754,
            "peExclExtraAnnual":null,
            "peExclExtraHighTTM":849.996,
            "peExclExtraTTM":1287.605,
            "peExclLowTTM":537.4061,
            "peInclExtraTTM":1287.605,
            "peNormalizedAnnual":null,
            "pfcfShareAnnual":636.3861,
            "pfcfShareTTM":337.1766,
            "pretaxMargin5Y":-7.99014,
            "pretaxMarginAnnual":-2.70567,
            "pretaxMarginTTM":3.36811,
            "priceRelativeToS&P50013Week":77.11745,
            "priceRelativeToS&P50026Week":199.24264,
            "priceRelativeToS&P5004Week":51.66437,
            "priceRelativeToS&P50052Week":710.6433,
            "priceRelativeToS&P500Ytd":577.83784,
            "psAnnual":25.06395,
            "psTTM":21.86335,
            "ptbvAnnual":101.3027,
            "ptbvQuarterly":39.71771,
            "quickRatioAnnual":0.80163,
            "quickRatioQuarterly":1.31755,
            "receivablesTurnoverAnnual":21.62584,
            "receivablesTurnoverTTM":19.53276,
            "revenueEmployeeAnnual":507636.8,
            "revenueEmployeeTTM":586804.4,
            "revenueGrowth3Y":51.98938,
            "revenueGrowth5Y":50.3571,
            "revenueGrowthQuarterlyYoy":39.15905,
            "revenueGrowthTTMYoy":15.38144,
            "revenuePerShareAnnual":27.77175,
            "revenuePerShareTTM":27.9316,
            "revenueShareGrowth5Y":40.1492,
            "roaRfy":-2.42004,
            "roaa5Y":-4.59466,
            "roae5Y":-24.73315,
            "roaeTTM":4.75737,
            "roeRfy":-14.93773,
            "roeTTM":1.77866,
            "roi5Y":-6.98571,
            "roiAnnual":-3.82649,
            "roiTTM":2.67807,
            "tangibleBookValuePerShareAnnual":6.71934,
            "tangibleBookValuePerShareQuarterly":16.36076,
            "tbvCagr5Y":46.15836,
            "totalDebt/totalEquityAnnual":202.7652,
            "totalDebt/totalEquityQuarterly":85.66527,
            "totalDebtCagr5Y":40.0784,
            "yearToDatePriceReturnDaily":676.75519
        }
    },
    calculated:{
        gainLoss:{
            total:{
              dollar:0,
              percent:100,
            },
            today:{
                dollar:0,
                percent:100,
            },
        },
        currVal:1,
        quantity:5,
        costBasis:{
            perShare:1,
            total:2,
        },
    }
}