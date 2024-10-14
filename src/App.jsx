import { useState } from 'react'
import { characters } from './data.js';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  
  console.log(money)
  console.log(team)

  return (

    <h1>Hello world!</h1>
  );
}

export default App

