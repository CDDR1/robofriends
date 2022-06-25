import React from 'react';

const Card = (props) => {
    return (
        <div className='flex flex-col items-center gap-5 bg-green-200 rounded-xl p-8 shadow-md transition-transform duration-300 hover:scale-105'>
            <img src={props.photo} className="w-48"></img>
            <h2 className='text-4xl font-bold'>{props.name}</h2>
            <h3 className='text-xl font-medium'>{props.email}</h3>
        </div>
    );
};

export default Card;