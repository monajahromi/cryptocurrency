import React from 'react';

const CoinItem = (props) => {

    return (
        <div>
            symbol : {props.symbol}
            name  : {props.name}
            
        </div>
    );
};

export default CoinItem;