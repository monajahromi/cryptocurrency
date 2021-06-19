import React, { useEffect, useState } from 'react';

const Pagination = ({pagesCount  , activeParent  ,setActiveParent , listSize = 20, setListSize}) => {

    const[active , setActive]  = useState({activeParent})
    const[listS , setListS] = useState(listSize)
    const[fromPage , setFromPage] = useState(1)
    const availableListSizes=[20, 50, 100]
    
    

    useEffect(()=>{
        setActive(activeParent)  
        setListS(listSize)
        
    },[activeParent,listSize])

    const handelChangePage =(item) =>{
        setActiveParent(item)
        setActive(item)  
    }

    const handelChangeListSize = (item) =>{
        setListS(item); 
        setListSize(item)
    }

    const handelOnNextPage =()=> {
        setActiveParent(active+1)
        setActive(active+1)  
        setFromPage(fromPage + 1)
    }

    const handelOnPreviuosPage =()=> {
        setActiveParent(active-1)
        setActive(active-1)  
        setFromPage(fromPage - 1)
    }

    return (
        <div>
            
            <ul>
            <button onClick={()=> handelOnPreviuosPage()} >PreviuosPage</button>
                {pagesCount < 1116 && Array.from({length: pagesCount}, (_, i) => i ).map((item)=>{
                    if (item == active)
                    return <button >{item+1} *</button>
                    else 
                    return <button onClick={()=> handelChangePage(item)}>{item+1} </button>
                }
                
                )}

                {pagesCount >= 6 && Array.from({length: 5}, (_, i) => i + fromPage ).map((item)=>{
                    if (item == active)
                    return <button >{item+1} *</button>
                    else 
                    return <button onClick={()=> handelChangePage(item+1)}>{item} </button>
                }
                
                )}
                <button onClick={()=> handelOnNextPage()} >nextPage</button>
            </ul>

            <ul>
                {listS}
                {availableListSizes.map((item)=>{
                    if (item === listS)
                    return <button >{item} *</button>
                    else 
                    return <button onClick={()=> handelChangeListSize(item)}>{item} </button>
                }
                
                )}
            </ul>
        </div>
    );
};

export default Pagination;