import React, { useEffect, useState } from 'react';

const Pagination = ({pagesCount  , activePage ,setActivePage , listSize = 20, setListSize}) => {

    const[active , setActive]  = useState({activePage})
    const[listS , setListS] = useState(listSize)
    const availableListSizes=[20, 50, 100]
    
    

    useEffect(()=>{
        setActive(activePage)  
        setListS(listSize)
        
    },[activePage,listSize])

    const handelChangePage =(item) =>{
        setActivePage(item)
        setActive(item)  
    }

    const handelChangeListSize = (item) =>{
        setListS(item); 
        setListSize(item)
    }

    return (
        <div>
            aaa{pagesCount}{activePage}
            <ul>
                {Array.from({length: pagesCount}, (_, i) => i + 1).map((item)=>{
                    if (item == active)
                    return <button >{item} *</button>
                    else 
                    return <button onClick={()=> handelChangePage(item)}>{item} </button>
                }
                
                )}
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