import React from 'react';
import Card from './Card';

const CardsList = (props) => {
    return (
        <div className='flex flex-wrap justify-center gap-5 pt-5 pb-8 px-3'> 
            {props.robots.map(robot => <Card key={robot.robotID} photo={robot.robotImg} name={robot.robotName} email={robot.robotEmail} />)}
        </div>
    );
};

export default CardsList;