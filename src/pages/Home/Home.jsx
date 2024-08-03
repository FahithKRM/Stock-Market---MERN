import { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin]);

  return (
    <div className='home'>
        <div className="header">
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the worlds largest cryptocurrency
                marketplace. Sign up to explore more about cryptos.
            </p>
            <form>
                <input type="text" placeholder='Search crypto..' />
                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p>24 Hours Change</p>
                <p>Market Cap</p>
            </div>
            {displayCoin.slice(0, 10).map((coin, index) => (
                <div className="table-layout" key={index}>
                    <p>{coin.market_cap_rank}</p>
                    <div>
                        <img src={coin.image} alt="" />
                        <p>{coin.name + " - " + coin.symbol}</p>
                    </div>
                    <p>{currency.symbol} {coin.current_price.toLocalString()}</p>
                    <p>{Math.floor(coin.price_change_percentage_24h * 100)/100}</p>
                    <p>{currency.symbol} {coin.market_cap.toLocalString()}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home
