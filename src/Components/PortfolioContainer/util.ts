import { PortfolioContainerState } from "./PortfolioContainer.types";

export const defaultProps:PortfolioContainerState = {
    portfolio: {
        metadata:{

        },
        positions:[
            {
                //id: 1, Don't need becuase you can use the index of the array.
                symbol: "F",
                buys:[
                    {
                        //id: 1,
                        date: "date",
                        quant: 1,
                        price: 420,
                    },
                ],
            },
            {
                //id: 1,
                symbol: "MJ",
                buys:[
                    {
                        //id: 1,
                        date: "date",
                        quant: 1,
                        price: 69420,
                    },
                ],
            }
        ]
    },
    symbols: ["TSLA", "AAPL"],
    data:[],
}