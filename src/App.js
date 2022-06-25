import './App.css';
import Header from './components/Header.jsx';
import CardsList  from './components/CardsList';
import { useState } from 'react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

const config = {
  dictionaries: [starWars]
}

const generateName = () => {
    return uniqueNamesGenerator(config);
};

const generateEmail = () => {
    const randomEmail = require('random-email');
    return randomEmail();
};

const App = () => {

    const [robots, setRobots] = useState([
        {
            robotID: 1,
            robotImg: "https://robohash.org/1.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 2,
            robotImg: "https://robohash.org/2.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 3,
            robotImg: "https://robohash.org/3.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 4,
            robotImg: "https://robohash.org/4.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 5,
            robotImg: "https://robohash.org/5.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 6,
            robotImg: "https://robohash.org/6.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 7,
            robotImg: "https://robohash.org/7.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 8,
            robotImg: "https://robohash.org/8.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 9,
            robotImg: "https://robohash.org/9.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
        {
            robotID: 10,
            robotImg: "https://robohash.org/10.png",
            robotName: generateName(),
            robotEmail: generateEmail(),
        },
    ]);

    const [searchText, setSearchText] = useState("");

    return (
        <div className='min-h-screen text-lg bg-gradient-to-r from-myGradient-from to-myGradient-to'>
            <Header handleSearch={setSearchText} />
            <CardsList robots={robots.filter(robot => robot.robotName.toLowerCase().slice(0, searchText.length) === searchText.toLowerCase())} />
        </div>
    );
}

export default App;