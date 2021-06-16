import React, { useEffect, useState } from 'react';
import { notifyType } from '../Notify/Notify.js';
import CoinItem from './CoinItem.js'
import Notify from '../Notify/Notify.js';
import Pagination from '../Pagintation/Pagination.js'
import { getList } from '../../api/coingecko/coinsApi'


const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({});

  const [listSize, setListSize] = useState(20);
  const [conisCount, setConisCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);


  const [currentCoinsList, setCurrentCoinsList] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const myResolve = (data) => {
    
    if (data.hasOwnProperty("error"))
      setMsg({ type: notifyType.error, text: data.error })

    else {
      setMsg({ type: notifyType.success, text: "Good" })
      setCoins(data);



    }

  }

  const myReject = (error) => {
     
      setMsg({ type: notifyType.error, text: error })
    }

  const myfinally = () => {
      setIsLoading(false);
    }

    useEffect(() => {
     
      setIsLoading(true);

      let myPromise = getList();
      myPromise
        .then(myResolve)
        .catch(myReject)
        .finally(myfinally);


    }, [])



    useEffect(() => {


      if (coins.length % listSize === 0)
        setPagesCount(coins.length / listSize)

      else
        setPagesCount(parseInt(coins.length / listSize) + 1)

      setCurrentCoinsList(coins.slice((listSize * activePage), (listSize * (activePage + 1))))

    }, [activePage, listSize,coins])

    return (
      <>
        {isLoading && 'isLoading'}
        <Notify type={msg.type} text={msg.text}></Notify>
        <div> counts: {conisCount}</div>
        <div> pagesCount: {pagesCount}</div>
        <div>
          {currentCoinsList.map((item, index) => {
            if (item) {
              return <CoinItem name={item.name} symbol={item.symbol} key={item.id}> </CoinItem>
            }
          })}
        </div>
        <Pagination pagesCount={pagesCount} activePage={activePage} setActivePage={setActivePage} listSize={listSize} setListSize={setListSize}></Pagination>

      </>
    );
  
  
  
  }


  export default Coins;

  