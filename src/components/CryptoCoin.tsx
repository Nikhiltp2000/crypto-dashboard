import React from "react";
import {CryptoCoins} from "../models/crypto-interface";


export const CryptoCoin: React.FunctionComponent<CryptoCoins.ICryptoCoinType> = (props) => {

  const { id, name, image, symbol, current_price, price_change_percentage_24h, market_cap, total_volume, circulating_supply } = props;

  return (
    <>
      <tr className="row">
        <td className="coin-id">{id}</td>
        <td className="coin-name">{name}</td>
        <td className="coin-img"><img srcSet={image} alt="coin-img" /></td>
        <td className="coin-symbol">{symbol.toUpperCase()}</td>
        <td className="coin-price">${current_price.toFixed(2)}</td>

        {
          price_change_percentage_24h < 0 ?
            (<td className='coin-24h red'>{price_change_percentage_24h.toFixed(2)}%</td>) :
            (<td className='coin-24h green'>+{price_change_percentage_24h.toFixed(2)}%</td>)
        }

        <td className="coin-marketcap">${market_cap.toLocaleString()}</td>
        <td className="coin-volume">${total_volume.toLocaleString()}</td>
        <td className="coin-circulation"> {circulating_supply.toLocaleString()} {symbol.toUpperCase()}</td>
      </tr>
    </>
  );
};
