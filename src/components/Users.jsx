import { useState,useEffect } from "react";
let Users=()=>
{
    const[users,setUsers]=useState([])
     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response=>response.json()).
        then(data=>{setUsers(data); console.log(data)})
        },[]);
        return(
            <>
            <h2>Users List</h2>
            <ul>{users.map(user=><li>{user.name}</li>)}
            </ul>
            <h2>Users Email</h2>
            <ul>
                {users.map(user=><li>{user.email}</li>)}
            </ul>
            </>
        )
}
export default Users;