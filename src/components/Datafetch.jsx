import { useState,useEffect } from "react";
function Datafetch()
{
    const[books,setBooks]=useState([])
    const[refresh,setRefresh]=useState(0)
         useEffect(()=>{
            fetch('https://potterapi-fedeperin.vercel.app/en/books').
            then(response=>response.json()).
            then(data=>setBooks(data))
            console.log("Refreshed");
            },[refresh]);
            return(
                <>
                <table border="2px">
                    <tbody>
                    <tr>
                        <th>Number</th>
                        <th>Book Title</th>
                        <th>Original Title</th>
                        <th>Release Date</th>
                        <th>Description</th>
                        <th>Pages</th>
                        <th>Cover</th>
                        <th>Index</th>
                    </tr>
                    {books.map(book=>
                        <tr>
                            <td>{book.number}</td>
                            <td>{book.title}</td>
                            <td>{book.originalTitle}</td>
                            <td>{book.releaseDate}</td>
                            <td>{book.description}</td>
                            <td>{book.pages}</td>
                            <td><img src={book.cover} width="100px" height="100px"/></td>
                            <td>{book.index}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <button onClick={()=>setRefresh(refresh+1)}>Refresh</button>
                {/* <h2>Book List</h2>
                <ul>{books.map(book=><li>{user.name}</li>)}
                </ul>
                <h2>Users Email</h2>
                <ul>
                    {users.map(user=><li>{user.email}</li>)}
                </ul> */}
                </>
            )
}
export default Datafetch;