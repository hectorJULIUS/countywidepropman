import React, { useEffect, useState } from 'react'

function Table() {
  const [posts, setPost] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => setPost(data));
  } ,[])
  return (
    
    <div>
        
        <table>
          <tr>
            <thead>
              <th>Id</th>
              <th>title</th>
              <th>Body</th>
              <th colSpan={"2"}>Action</th>
            </thead>
          </tr>
        
        
        {
          posts.map(item =>{
            return<tr>
              <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>change</td>
            <td>Delete</td>

            </tr>
          })
        }
        </table>
      
    </div>
  )
}

export default Table