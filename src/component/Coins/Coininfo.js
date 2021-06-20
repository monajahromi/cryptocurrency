import React  , {useState,useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../api/coingecko/coinsApi';
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Notify from '../Notify/Notify.js';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import './Coins.css'



const Coininfo = () => {
    const param = useParams(); 
    const [isLoading, setIsLoading] = useState();
    const [coinInfo, setCoinInfo] = useState();
    const [msg, setMsg] = useState();
    
    
    useEffect(()=>{
        setIsLoading(true);

    let myPromise = getById(param.id);
    myPromise
      .then(myResolve)
      .catch(myReject)
      .finally(()=>setIsLoading(false));

    },[param])





  const myResolve = (data) => {

    if (data.hasOwnProperty("error"))
      setMsg(data.error )

    else {
      setCoinInfo(data);
    }

  }

  const myReject = (error) => {

    setMsg( error )
  }

  const myfinally = () => setIsLoading(false)

  useEffect(() => {

    


  }, [])

  if (isLoading)
  return <div>{"isLoading"}</div>

    return (
        <Grid item lg={10} >


        <ListItem className="pageHaader">
        <Avatar src={coinInfo.image.small}></Avatar>
          Coins market Data 

        </ListItem>
        {msg && <Notify text={msg}></Notify>}
        
        {coinInfo &&
            <div className="prices" >
             Object.keys(coinInfo.market_data.current_price).map(item=> 
                {
                    return  <ListItem ><ListItemText primary={item} dense = "true" secondary={coinInfo.market_data.current_price[item]} /> </ListItem>
                    
                  //  <div>{item} {coinInfo.market_data.current_price[item]}</div>
                }
        
        
                )
            </div>    
            }
             
           
        // <div>
           
        //     {coinInfo.asset_platform_id}
        // </div>
        
        </Grid>
    );
};

export default Coininfo;