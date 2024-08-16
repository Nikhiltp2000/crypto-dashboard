import React, { useState, useEffect } from "react";
import { CryptoCoin } from "./components/CryptoCoin";
import { Pagination } from './services/Pagination';
import {CryptoCoins} from  "../src/models/crypto-interface";
import { fetchCryptoCoins } from "./services/apiService";



export const App: React.FunctionComponent = () => {

  const [coins, setCoins] = useState<CryptoCoins.ICryptoCoinType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>("");
  // Api call
  useEffect(() => {
    fetchCryptoCoins()
      .then((data) => setCoins(data))
      .catch((error) => alert(error.message + " Please try refreshing the page...!!!"))
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = coins.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      <h1>Crypto Money</h1>

      <section>
        <p className="title-heading"> Know all about Top 100 Crypto Currencies in world according to their current Market Capital.</p>
        <div className="search-box">
          <input type="text" placeholder="Search Coin..." onChange={(e) => { setSearchText(e.target.value) }} />
        </div>

        <div className="box">
          <table>
            <thead>
              <tr className="row">
                <th className="coin-id">#</th>
                <th className="coin-name head">Name</th>
                <th className="coin-img head">Logo</th>
                <th className="coin-symbol head">Symbol</th>
                <th className="coin-price head">Price</th>
                <th className="coin-24h head">Change in 24H</th>
                <th className="coin-marketcap-head">
                  <span>Market Cap </span>
                  <span className="marketcap-tooltip"> &#9432;
                    <span className="marketcap-tooltiptext">The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. <br /><br />
                      Market Cap = Current Price x Circulating Supply.</span>
                  </span>
                </th>
                <th className="coin-volume-head">
                  <span>Volume </span>
                  <span className="volume-tooltip"> &#9432;
                    <span className="volume-tooltiptext">A measure of how much of a cryptocurrency was traded in the last 24 hours.</span>
                  </span>
                </th>
                <th className="coin-circulation-head">
                  <span>Circulating Supply </span>
                  <span className="circulation-tooltip"> &#9432;
                    <span className="circulation-tooltiptext">The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>

              {
                searchText !== "" ?
                  (coins?.map((item, index) => {
                    if (item?.name?.toLowerCase().includes(searchText?.toLowerCase())) {
                      return (
                        <CryptoCoin
                          key={index + 1}
                          id={index + 1}
                          image={item?.image}
                          name={item?.name}
                          symbol={item?.symbol}
                          current_price={item?.current_price}
                          price_change_percentage_24h={item?.price_change_percentage_24h}
                          market_cap={item?.market_cap}
                          total_volume={item?.total_volume}
                          circulating_supply={item?.circulating_supply}
                        />
                      );
                    }
                    else {
                      return false;
                    }
                  })
                  ) :
                  (currentRows?.map((item, index) => {
                    return (
                      <CryptoCoin
                        key={((currentPage * 10) - 10) + index + 1}
                        id={((currentPage * 10) - 10) + index + 1}
                        image={item?.image}
                        name={item?.name}
                        symbol={item?.symbol}
                        current_price={item?.current_price}
                        price_change_percentage_24h={item?.price_change_percentage_24h}
                        market_cap={item?.market_cap}
                        total_volume={item?.total_volume}
                        circulating_supply={item?.circulating_supply}
                      />
                    );
                  })
                  )
              }
            </tbody>
          </table>
        </div>

        {
          searchText === "" &&
          <Pagination
            rowsPerPage={rowsPerPage}
            totalRows={coins.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        }

      </section>
    </>
  );
}
