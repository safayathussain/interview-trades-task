import React from 'react';
import './Pagination.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Pagination = () => {
    return (
            <div className='flex justify-between items-center mt-5 pt-5'>
                <p>1 - 5 of 39</p>
                <div className='flex gap-5 items-center'>
                    <p>The page you're on </p>
                    <select id="page" className='border border-black rounded pl-1'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <button className='previous-btn'><h3><AiOutlineArrowLeft /></h3></button>
                    <button className='next-btn'><h3><AiOutlineArrowRight /></h3></button>
                </div>
            </div>
    );
};

export default Pagination;