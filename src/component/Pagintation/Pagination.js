import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './PaginationStyles.js';
import Radio from '@material-ui/core/Radio';


const Pagination = ({pagesCount  , activeParent =0 ,setActiveParent , listSize = 20, setListSize}) => {

    const[active , setActive]  = useState({activeParent})
    const[listS , setListS] = useState(listSize);
    const[fromPage , setFromPage] = useState(0);
    const availableListSizes=[20, 50, 100]
    const classes = useStyles();
    

    useEffect(()=>{
        setActive(activeParent)  
        setListS(listSize)
        
    },[activeParent,listSize])

    const handelChangePage =(item) =>{
        if (item === active) return ;
        setActiveParent(item)
        setActive(item)  
    }

    const handelChangeListSize = (item) =>{
        setListS(item); 
        setListSize(item)
    }

    const handelOnNextPage =()=> {
        setActiveParent(active + 1)
        setActive(active + 1)  
        setFromPage(Math.min(fromPage + 1 ,pagesCount - 5 ))
    }

    const handelOnPreviuosPage =()=> {
        setActiveParent(active - 1)
        setActive(active - 1)  
        setFromPage(Math.max(fromPage - 1 , 0) )
    }

    const handelOnFirstPage= ()=>{
        setActiveParent(0)
        setActive(0)  
        setFromPage(0)
    }
    
    const handelOnLastPage= ()=>{
        setActiveParent(pagesCount-5)
        setActive(pagesCount-5)  
        setFromPage(pagesCount-5)
    }

    return (
        <div  className ={classes.pagingHolder}>
            
            <div className ={classes.paging}>
             
            
            <IconButton  variant='outlined' onClick={()=> handelOnFirstPage()} color="primary"><FaAngleDoubleLeft/></IconButton >
            <IconButton  variant='outlined' onClick={()=> handelOnPreviuosPage()} disabled ={active === 0 } color="primary"><FaAngleLeft/></IconButton >
                {pagesCount < 6 && Array.from({length: 5}, (_, i) => i ).map((item)=>{
                    
                    return  <Button variant={ (item === active) ? 'contained' : 'outlined' } className ={classes.button} onClick={()=> handelChangePage(item)} color="primary">{item+1} </Button>

                    //</div><button >{item+1} *</button>
                  //  else 
                  //  return <button onClick={()=> handelChangePage(item)}>{item+1} </button>
                }
                
                )}

                {pagesCount >= 6 && Array.from({length: 5}, (_, i) => i + fromPage ).map((item)=>{
                     return  <Button variant={ (item === active) ? 'contained' : 'outlined'}  className ={classes.button}  onClick={()=> handelChangePage(item)} color="primary">{item+1} </Button>
                    // if (item === active)
                    // return <button >--{item+1} *</button>
                    // else 
                    // return <button onClick={()=> handelChangePage(item)}>++{item+1} </button>
                }
                
                )}
                <MoreHorizIcon color="primary"/>
                <IconButton  variant='outlined' onClick={()=> handelOnNextPage()} disabled ={active === pagesCount - 1} color="primary"><FaAngleRight/></IconButton >
                <IconButton  variant='outlined' onClick={()=> handelOnLastPage()}  color="primary"><FaAngleDoubleRight/></IconButton >
                
            </div>

            <div>
                {listS}
                {availableListSizes.map((item)=>{
                    if (item === listS)
                    return <button >{item} *</button>
                    else 
                    return <button onClick={()=> handelChangeListSize(item)}>{item} </button>
                }
                
                )}
            </div>
        </div>
    );
};

export default Pagination;