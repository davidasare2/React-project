import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <FaBeer size={20} /> : <FaBeer size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-500' : 'fixed left-[-100%]'}>
                <ul className='pt-24 uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
