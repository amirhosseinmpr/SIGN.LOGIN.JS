import React from 'react'
import Carditem from './CardItem'
 import './Cards.css'
 import CoinList from '../components/coins/coinList'
const Cards = ( {filteredCoins}) => {
    return (
        <>
        {/* <div className="cards">
            <Carditem              
              text='87,918'
              arzesh="918,273,973"
              seler="273,912" /> */}
              <section class="grid-1">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
  <div class="item-4">4</div>
  <div class="item-5">5</div>
  <div class="item-6">6</div>
  <div class="item-7">7</div>
  <div class="item-8">8</div>
  <div class="item-9">9</div>
</section>
             
            
            {/* //  <CoinList  filteredCoins={filteredCoins}/>   */}
        {/* </div> */}
         
    
        </>
    )
}

 export default Cards

export  const getServerSideProps = async () => {
    const res = await fetch ( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false ") 
     

    const filteredCoins = await res.json()

    return{
        Props:{
            filteredCoins
        }
    }


}
