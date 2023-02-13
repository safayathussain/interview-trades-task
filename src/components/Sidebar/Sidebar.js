import React from 'react';
import './Sidebar.css'
import { RiHome3Line } from 'react-icons/ri';
import { VscServerProcess } from 'react-icons/vsc';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { BiLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='p-3'>
                <h1 className='text-5xl mb-5 pb-5 mt-4'>Logo</h1>
                <div className='ml-2 mb-5 pb-5 flex items-center gap-2 supplier'>
                    <h3><FaUserCircle size="37px"/></h3>
                    <div>
                        <p><small className='text-gray-500'>Supplier</small></p>
                        <h5 className='font-semibold'>Laura Schellen</h5>
                    </div>
                </div>
                <button id='dashboard-btn' className='sidebar-btn flex items-center gap-1'><h3><RiHome3Line /></h3>Dashboard</button>
                <button id='trades-btn' className='sidebar-btn flex items-center gap-1'><h3><VscServerProcess /></h3>Trades</button>
                <button id='organizations-btn' className='sidebar-btn flex items-center gap-1'><h3><FiUsers /></h3>Organizations</button>
                <button id='users-btn' className='sidebar-btn flex items-center gap-1'><h3><AiOutlineUser /></h3>Users</button>
                <button id='setting-btn' className='sidebar-btn flex items-center gap-1'><h3><GoSettings /></h3>System Settings</button>
                <button id='logout-btn' className='sidebar-btn logout-btn mb-5 flex items-center gap-1'><h3><BiLogOut /></h3>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;