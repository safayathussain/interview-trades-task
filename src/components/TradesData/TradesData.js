import React, { useEffect, useState } from 'react';
import Trade from '../Trade/Trade';
import './TradesData.css'

const LoadDataForSearch = () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => Search(data))
}
const Search = (trades) =>{
    const field = document.getElementById('search-field')
    const value = field.value;
    const filtered = trades.filter(trade => trade.name.toLowerCase().includes(value))
    searchedTrades(filtered)
}
const searchedTrades = (filtered) => {
    const trades = filtered;
        console.log('Searched items',trades)
}
const TradesData = ({filtered}) => {
    const [trades, setTrades] = useState([])
    useEffect(() => {
            fetch('data.json')
            .then(res => res.json())
            .then(data => setTrades(data))
        },[])
        

    return (
        <div className='flex justify-center mt-5'>
            <table className='w-full'>
                <thead className="mt-5 mb-5">
                    <tr className='border-bottom'>
                        <th className='text-start'>Trade handler</th>
                        <th className=''>Trade currencies</th>
                        <th className=''>Rate</th>
                        <th className=''>Trading amount</th>
                        <th className=''>Delivery date</th>
                        <th className=''>Status</th>
                        <th className=''>Required Action</th>
                    </tr>
                
                </thead>
                <tbody className=''>
                    {
                        trades.map(trade => <Trade key={trade.id} trade={trade}></Trade>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export {
    TradesData,
    LoadDataForSearch
};