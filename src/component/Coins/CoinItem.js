import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import './Coins.css'




const CoinItem = ({coin}) => {

    return (


                <TableRow>
                            <TableCell align="left">{coin.index + 1}</TableCell>
                            <TableCell align="left">{coin.name}</TableCell>
                            <TableCell align="left">{coin.symbol}</TableCell>
                            <TableCell align="right">
                                            <Button to={`/coininfo${coin.id}`} component={Link}  className="coinInfoBtn" >
                                                <AttachMoney />
                                                Prices
                                            </Button>
                            </TableCell>

                </TableRow>
    );
};

export default CoinItem;