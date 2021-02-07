export type PortfolioContainerProps = {
  portfolio: userPortfolio;
}

export type PortfolioContainerState = {
  portfolio: userPortfolio;
}

export type PortfolioSymbolsData = {
  
}

export type portfolioMetaData = {

}

export type positionBuy = {
  //id: number;
  date: string;
  quant: number;
  price: number;
}

export type userPosition = {
  //id: number;
  symbol: string;
  buys: positionBuy[];
}

export type userPortfolio = {
   metadata: portfolioMetaData;
   positions: userPosition[];
}

