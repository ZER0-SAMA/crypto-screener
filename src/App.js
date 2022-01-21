import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import { search } from 'global-modules';
import Coins from './Coins';




function App() {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   .then(res=>{
              setCoins(res.data);
              console.log(res.data);
              
   }).catch(error=>{console.log(error)});
  },[])
  const handleChange=e=>{
    setSearch(e.target.value)
    console.log(search)
  }
  const filteredCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="coin-app">
      <div className="crypt-title">
      CryptoScreener
      </div>
    
      <div className="coin-search">
      
      <form>
      <input  type='text' placeholder='search'className="coin-input" onChange={handleChange}/>
      </form>
      </div>
      {filteredCoins.map(coin=>{
        return(
          <Coins  key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price ={coin.current_price} volume={coin.market_cap} pricechange={coin.price_change_percentage_24h}/> 
        )
      })} 
    {/* </div> */}
    </div>
  );
}

export default App;
