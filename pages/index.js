import React from 'react';
import ColoredCounter from '../components/ColoredCounter';
import HogwartsHouse from '../components/HogwartsHouse';
import Jokes from '../components/Jokes';
import SearchList from '../components/SearchList';  

const Home = () => {
    
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

    return (
        <div>
            <h1>Colored Counter</h1>
            <ColoredCounter />

            <h1>Hogwarts Häuser</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <HogwartsHouse name="Gryffindor" />
                <HogwartsHouse name="Hufflepuff" />
                <HogwartsHouse name="Ravenclaw" />
                <HogwartsHouse name="Slytherin" />
            </div>

            <h1>Suchliste</h1>
            <SearchList names={names} /> { }

            <h1>Chuck Norris Witz</h1>
            <Jokes />
        </div>
    );
};

export default Home;
