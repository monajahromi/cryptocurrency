import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { getList } from '../../api/coingecko/coinsApi';
import Notify from '../Notify/Notify.js';
import Pagination from '../Pagintation/Pagination.js';
import CoinItem from './CoinItem.js';
import './Coins.css'



const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [msg, setMsg] = useState();

  const [listSize, setListSize] = useState(20);
  const [pagesCount, setPagesCount] = useState(0);


  const [currentCoinsList, setCurrentCoinsList] = useState([]);
  const [activePage, setActivePage] = useState(0);


  

  useEffect(() => {

    setIsLoading(true);

    let myPromise = getList();
    myPromise
      .then(myResolve)
      .catch(myReject)
      .finally(()=>setIsLoading(false));


  }, [])



  const myResolve = (data) => {

    if (data.hasOwnProperty("error"))
      setMsg(data.error )

    else {
      data.map((item, index) => data[index] = { index: index, ...item })
      setCoins(data);



    }

  }

  const myReject = (error) => {

    setMsg( error )
  }


  useEffect(() => {


    if (coins.length % listSize === 0)
      setPagesCount(coins.length / listSize)

    else
      setPagesCount(parseInt(coins.length / listSize) + 1)
      setCurrentCoinsList(coins.slice((listSize * activePage), (listSize * (activePage + 1))))

  }, [activePage, listSize, coins])

  if (isLoading)
   return <div>{"isLoading"}</div>
  
  
   return (
  

      <Grid item lg={12} >


        <ListItem className="pageHaader">
          Coins List 

        </ListItem>
        {msg && <Notify text={msg}></Notify>}
        


        {currentCoinsList && <TableContainer>
          <Table aria-label="Accounts" size="small" style = {{marginBottom : '20px'}}>
            <TableHead >
              <TableRow className="coinsHeader">
                <TableCell align="left">#</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Symbol</TableCell>
                <TableCell align="left"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {currentCoinsList.map((item, index) => { return <CoinItem coin={item}> </CoinItem> })}
            </TableBody>
          </Table>
        </TableContainer>}

        <Pagination pagesCount={pagesCount} activeParent={activePage} setActiveParent={setActivePage} listSize={listSize} setListSize={setListSize}></Pagination>
      </Grid>


      

    
  );



}


export default Coins;

