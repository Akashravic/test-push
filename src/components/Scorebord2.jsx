import { useState } from "react";
function Scorebord2()
 {
  const [score,setScore]=useState(0)
  return (
    <>
    <h1 style={{color:'yellow'}}>Score Board 2</h1>
     <h2 style={{color:'red'}}>Score={score}</h2>
    <button onClick={()=>setScore(score+10)}>Goal</button>
    <button onClick={()=>setScore(score-5)}>Yellow Card</button>
    <button onClick={()=>setScore(0)}>Game Over</button>
    </>
  )
}
export default Scorebord2;
//this is used for editing purpose for uploading git