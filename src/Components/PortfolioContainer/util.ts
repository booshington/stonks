import { PortfolioContainerState } from "./PortfolioContainer.types";

export const defaultProps:PortfolioContainerState = {
    portfolio: {
        metadata:{

        },
        positions:[
            {
                id: 1,
                symbol: "TSLA",
                buys:[
                    {
                        id: 1,
                        date: "date",
                        quant: 1,
                        price: 420,
                    },
                ],
            }
        ]
    },
    symbols: ["TSLA", "AAPL"],
    data:[],
}