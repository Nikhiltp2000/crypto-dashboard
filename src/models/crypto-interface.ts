export namespace CryptoCoins {

  export interface ICryptoCoinType {
      id                         : number,
      name                       : string,
      image                      : string,
      symbol                     : string,
      current_price              : number,
      price_change_percentage_24h: number,
      market_cap                 : number,
      total_volume               : number,
      circulating_supply         : number
  }

  export const initialState: ICryptoCoinType = {
      id                         : 0,
      name                       : '',
      image                      : '',
      symbol                     : '',
      current_price              : 0,
      price_change_percentage_24h: 0,
      market_cap                 : 0,
      total_volume               : 0,
      circulating_supply         : 0
  };
}


