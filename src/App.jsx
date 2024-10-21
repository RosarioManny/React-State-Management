import { useState } from 'react'
import { characters } from './data.js';
import './App.css'
import './index.css'

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(characters);
  const [teamStrength, setTeamStrength] = useState(0);
  const [teamAgility, setTeamAgility] = useState(0);

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


  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const moneyDifference = money - fighter.price
      setMoney(moneyDifference);
      setTeam([...team, fighter]);
      setTeamAgility(teamAgility + fighter.agility)
      setTeamStrength(teamStrength + fighter.strength)
    } else {
      console.log("Not Enough money")
    }
  }

  const listTeam = team.map((fighter, i) => {
    return(
      <li key={i}>
      {fighter.name} :: <b>Cost - {fighter.price} </b>
        <p>
        Agility: {fighter.agility} 
        <br />
        Strength: {fighter.strength}
        </p> 
        <img src={fighter.img} alt="link broken :(" />
      </li>
    )
  })



  // const listTeam = team.map((member, i) => {
  //   return (
  //    <li key={i}>
  //    {member.name} :: <b>Cost - {member.price} </b>
  //      <p>
  //      Agility: {member.agility} 
  //      <br />
  //      Strength: {member.strength}
  //      </p> 
  //      <img src={member.img} alt="link broken :(" />
  //    </li>
  //   )
  //  })

  
  return (
    <>
     <h1>ReactVille IN PERIL!</h1>
     <h2>Current Cash: <b>{money}</b></h2>
     <h2>Agility: {teamAgility}</h2>
     <h2>Strength: {teamStrength}</h2>
     <h2>Your Team</h2>
     <ul>
       {listTeam}
     </ul>
  
     <hr/>
     <ul>
      {listFighter}
     </ul>
    </>
   
  );
}

export default App

