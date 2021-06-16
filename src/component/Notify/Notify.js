import React from 'react';

const notifyType=  {"error":"Error" , "success" : "Done" , "warn" : "Warning "}
Object.freeze(notifyType) ; 


const Notify = ({type , text} ) => {
    return (
        <div>
            <ul>
                <li>{type}</li>
                <li>{text}</li>
            </ul>   
        </div>
    );
};

export { notifyType };
export default Notify ;