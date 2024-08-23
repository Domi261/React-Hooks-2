import React, { useState, useEffect } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');  

  
  const fetchJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);  
  };



  return (
    <div>
      <h1>Random Chuck Norris Joke</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Neuen Witz laden</button>
    </div>
  );
};

export default Jokes;  
