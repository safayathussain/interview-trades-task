import React from 'react';
import Pagination from '../Pagination/Pagination';
import {TradesData, LoadDataForSearch} from '../TradesData/TradesData';
import './Trades.css'
import { FiFilter } from 'react-icons/fi';
import { BsArrowDownCircle } from 'react-icons/bs';

const Trades = () => {
    return (
        <div className='w-full pl-5'>
            <div className='flex justify-between mt-5 pt-5'>
                <h1 className='text-2xl font-bold'>Trades</h1>
                <button className='bg-blue-900 px-4 py-3 rounded-xl text-white'>Create a new trade</button>
            </div>
            <div className='flex gap-5 mt-5'>
                <button className='underline-btn'>All trades</button>
                <button className='underline-btn'>Trades offers</button>
            </div>
            <hr className='top-hr'></hr>
            <div className='mt-5 bg-hover-effect p-3 rounded-xl flex gap-4 items-center'>
                <input type="text" placeholder='Search for organizations, trading amounts...' className='border-2 pl-3 w-full py-2 rounded-lg' id='search-field' onChange={() => LoadDataForSearch()}></input>
                <div className="dropdown">
                    <button className='border-2 px-4 py-2 rounded-md bg-white flex items-center gap-1'><h3><FiFilter /></h3>Filter</button>
                    <div className="dropdown-content">
                        <a href="./exapmle1">Example1</a>
                        <a href="./example2">Example2</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className='border-2 px-4 py-2 rounded-md bg-white flex items-center gap-1'><h3><BsArrowDownCircle /></h3>Export</button>
                    <div className="dropdown-content">
                        <a href="./exapmle1">as .csv</a>
                        <a href="./example2">as .xlsx</a>
                    </div>
                </div>
            </div>
            <TradesData></TradesData>
            <Pagination></Pagination>
        </div>
    );
};

export default Trades;