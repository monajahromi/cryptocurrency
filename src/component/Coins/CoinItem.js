import React from 'react';

const CoinItem = (props) => {

    return (
        <div>
            symbol : {props.symbol}
            name  : {props.name}
            index  : {props.index}
            
        </div>
    );
};

export default CoinItem;