import React from 'react';
import './Trade.css'
const Trade = ({trade}) => {
    return (
        <tr className='rounded table-data'>
            <td>
                <div className='pt-2 pb-2 pl-2'>
                    <h5>{trade.name}</h5>
                    <p>{trade.email}</p>
                </div>
            </td>
            <td>
                <p className='text-center pt-2 pb-2'>{trade.tradeCurrencies}</p>
            </td>
            <td>
                <p className='text-center pt-2 pb-2'>{trade.rate}</p>
            </td>
            <td>
                <p className='text-center pt-2 pb-2'>$ {trade.amount}</p>
            </td>
            <td>
                <p className='text-center pt-2 pb-2'>{trade.deliveryDate}</p>
            </td>
            <td>
                <p className='text-center pt-2 pb-2'>{trade.status}</p>
            </td>
            <td>
                <p className='text-center pt-2 pb-2'>{trade.RequiredAction}</p>
            </td>
            

        </tr>
        
    );
};

export default Trade;