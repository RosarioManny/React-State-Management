import { useState } from 'react'
import { characters } from './data.js';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(characters)

  const listFighter = zombieFighters.map((fighter, i) => {
    return(
      <li key={i}>
      {fighter.name} :: <b>Cost - {fighter.price} </b>
        <p>
        Agility: {fighter.agility} 
        <br />
        Strength: {fighter.strength}
        </p> 
        <img src={fighter.img} alt="link broken :(" />
        <button onClick={() => handleAddFighter(fighter)}>Add</button>
        <hr />
      </li>
    )
  })

  const handleAddFighter = (addedMem) => {

    // Checks if you can Afford
    const moneyDifference = money - addedMem.price
      if(addedMem.price > money) {
        console.log("Need More Cash")
        return <p>"Need enought cash"</p>
      } else {
        setMoney(moneyDifference)
      }
    // This adds figther
    const addedFighter = [...team, addedMem];
    setTeam(addedFighter);
    // Removes fighter from List of Options
    const figtherId = zombieFighters.indexOf(addedMem);
    const removeFighter = zombieFighters.splice(figtherId, 1)
    // setZombieFighters(removeFighter)
  }

  
  return (
    <>
     <h1>ReactVille IN PERIL!</h1>
     <h2>Current Cash: <b>${money}</b></h2>
     <ul>
      {listFighter}
     </ul>
     <h2>Your Team</h2>
     <ul>
        {team.map((teamMember) => (
          <li key={teamMember.name}>
            {teamMember.name}

          </li> 
        ))}
     </ul>
    </>
   
  );
}

export default App

