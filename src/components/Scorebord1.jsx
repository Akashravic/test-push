import { useEffect, useState } from "react";
function Scorebord1()
 {
//   const [score,setScore]=useState(0)
//   const [no_of_players,setPlayers]=useState(11)
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users').
//     then(response=>response.json()).
//     then(data=>console.log(data))
//     //console.log("Score changed")
//   },[]); //useEffect will be called whenever score changes
  return (
    <>
    <h1 style={{color:'green'}}>Score Board 1</h1>
     <h2 style={{color:'blue'}}>Score={score}</h2>
     <h2 style={{color:'blue'}}>No of Players={no_of_players}</h2>
    <button onClick={()=>setScore(score+10)}>Goal</button>
    <button onClick={()=>setScore(score-5)}>Yellow Card</button>
    <button onClick={()=>setPlayers(no_of_players-1)}>Red Card</button>
    <button onClick={()=>setScore(0)}>Game Over</button>
    </>
  )
}
export default Scorebord1;