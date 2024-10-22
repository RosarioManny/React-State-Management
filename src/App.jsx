import { useState, useEffect } from 'react'
import { characters } from './data.js';
import './App.css'
import './index.css'

const App = () => {
  const [zombieFighters, setZombieFighters] = useState(characters);
  const [teamStrength, setTeamStrength] = useState(0);
  const [teamAgility, setTeamAgility] = useState(0);
  const [money, setMoney] = useState(100);
  const [team, setTeam] = useState([]);

  // Maps the list of zombieFighters
  const listFighter = zombieFighters.map((fighter, i) => {
    return(
      <li key={i}>
      <b>{fighter.name}</b>
       <p>Cost - {fighter.price}</p>
        <p> Agility: {fighter.agility} </p>
        <p> Strength: {fighter.strength} </p> 
        <img src={fighter.img} alt="link broken :(" />
        <button onClick={() => handleAddFighter(fighter)}>Add</button>
      </li>
    )
  })

  const listTeam = team.map((fighter, i) => {
    return(
      <li key={i}>
        <b>{fighter.name}</b>
        <p>Cost - {fighter.price} </p>
          <p> Agility: {fighter.agility} </p>
          <p>Strength: {fighter.strength} </p> 
          <img src={fighter.img} alt="link broken :(" />
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
      </li>
    )
  })

  // Handles adding fighters 
  const handleAddFighter = (fighter, i) => {
    if (money >= fighter.price) {
        setMoney((prevMoney) => prevMoney - fighter.price);
        setZombieFighters((prevZFighter) => prevZFighter.filter((zfighter) => zfighter.name !== fighter.name));
        setTeam((prevTeam) => [...prevTeam, fighter]);
        setTeamStrength(teamStrength + fighter.strength); // Update total strength
        setTeamAgility(teamAgility + fighter.agility);
    } else {
      console.log("Not Enough money")
    }
  }

  const handleRemoveFighter = (removedFighter) => {
    setTeam((prevTeam) => prevTeam.filter((member) => member.name !== removedFighter.name));
    setMoney((prevMoney) => prevMoney + removedFighter.price);
    setTeamStrength((prevStrength) => prevStrength - removedFighter.strength);
    setTeamAgility((prevAgility) => prevAgility - removedFighter.agility);
    setZombieFighters((prevZFighter) => [...prevZFighter, removedFighter]);
  } 

  return (
    <div>
     <h1>ReactVille IN PERIL!</h1>
     <h2>Current Cash: {money < 10 ? "Not enough money" : money } </h2>
      <h2>Agility: {teamAgility}</h2>
      <h2>Strength: {teamStrength}</h2>
      <h2>{team.length === 0 ? "Pick Some Members" : "Your Team"} </h2>
     <ul>
       {listTeam}
     </ul>
      <hr width="750"/>
      <hr width="500"/>
     <ul>
      {listFighter}
     </ul>
    </div>
   
  );
}

export default App