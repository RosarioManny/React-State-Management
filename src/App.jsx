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
    // setZombieFighters(zombieFigthers removeFighter)
  }

  const handleTeam = () => {
    if(team.length = 0) {
        <p>Pick Some Team Members</p>
    } 
    else { team.map((teamMember) => (
       return(
       <p key={teamMember.name}>
        <b>{teamMember.name}</b> :: Strength: {teamMember.strength} || Agility: {teamMember.agility}
      </p> ) 
      ))
    }
  }
  
  return (
    <>
     <h1>ReactVille IN PERIL!</h1>
     <h2>Current Cash: <b>${money}</b></h2>
     <h2>Your Team</h2>
     <p>{handleTeam()}</p>
     <ul>
     </ul>
     <hr/>
     <ul>
      {listFighter}
     </ul>
     
    </>
   
  );
}

export default App

