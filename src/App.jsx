import { useState } from 'react'
import { characters } from './data.js';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(characters)

  const listFighter = zombieFighters.map((fighter) => {
    return(
      <li>
      {fighter.name} :: <b>Cost - {fighter.price} </b>
        <p>
        Agility: {fighter.agility} 
        <br />
        Strength: {fighter.strength}
        </p> 
        <img src={fighter.img} alt="link broken :(" />
        <button type="submit">Add</button>
      </li>
    )
  })

  return (
    <>
     <h1>ReactVille IN PERIL!</h1>
     <p>Current Cash: <b>${money}</b></p>
     <ul>
      {listFighter}
     </ul>
    </>
   
  );
}

export default App

