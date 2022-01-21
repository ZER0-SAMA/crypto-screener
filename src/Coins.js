import React from 'react'
import './Coins.css';
const Coins = ({name,symbol,price,volume,image,pricechange}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                <img src={image} alt='cryptocurrency'/>
                <h1>{name}</h1>
                <p className='coin-symabol'>{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs {price}</p>
                    <p className="coin-volume">Rs {volume.toLocaleString()}</p>
                {pricechange < 0 ? (<p className="coin-percent red">{pricechange.toFixed(2)}%</p>)
                    :(<p className="coin-percent green">{pricechange.toFixed(2)}%</p>)}
                </div>
            </div> 
        </div>
    )
}
export default Coins;