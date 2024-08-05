import { useContext, useEffect, useState } from "react";
import "./Home.css";
// import { CoinContext } from "../../context/CoinContext";
// import { Link } from "react-router-dom";

const Home = () => {
  // const { allCoin, currency } = useContext(CoinContext);
  // const [displayCoin, setDisplayCoin] = useState([]);
  // const [input, setInput] = useState("");

  // const InputHandler = (event) => {
  //   setInput(event.target.value);
  //   if (event.target.value === "") {
  //     setDisplayCoin(allCoin);
  //   }
  // };

  // const searchHandler = async (event) => {
  //   event.preventDefault();
  //   const coins = await allCoin.filter((item) => {
  //     return item.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setDisplayCoin(coins);
  // };

  // useEffect(() => {
  //   setDisplayCoin(allCoin);
  // }, [allCoin]);

  return (
    <div className="home">
      <div className="header">
        <h1>The Leading Crypto Marketplace </h1>
        <p>
        Join the World's Leading Cryptocurrency Marketplace. Sign Up to Discover More about Cryptos.
        </p>
        <form >
          <input
            list="coinlist"
            type="text"
            placeholder="Search crypto.."
            required
          />
          {/* <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist> */}

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign: 'center'}}>24 Hours Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {/* {displayCoin.slice(0, 10).map((coin, index) => (
          <div to={`/coin/${coin.id}`} className="table-layout" key={index}>
            <p>{coin.market_cap_rank}</p>
            <div>
              <img src={coin.image} alt="" />
              <p>{coin.name + " - " + coin.symbol}</p>
            </div>
            <p>
              {currency.symbol} {coin.current_price.toLocalString()}
            </p>
            <p>{Math.floor(coin.price_change_percentage_24h * 100) / 100}</p>
            <p>
              {currency.symbol} {coin.market_cap.toLocalString()}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
