import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';

const Header = (props) => {
    return (
        <header className='pt-14 pb-5 flex flex-col items-center gap-10 shadow-md'>
            <h1 className="text-5xl sm:text-7xl text-green-300">ROBOFRIENDS</h1>
            <input onChange={(e) => props.handleSearch(e.target.value)} className='p-5 bg-blue-200 outline-none border-2 border-blue-500' type="text" placeholder='Search Robots...' />
        </header>
    );
};

export default Header;