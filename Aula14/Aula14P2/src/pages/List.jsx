import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function List() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect (()=>{
    getUsers();
  },[])

  const getUsers= async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
  }

  const openUserProfile = (user) => {
    navigate('/profile', {state: {user}})
  }

  return (
    <>
    <ul>
        {users.map((user) => (
            <li key={user.id}
                onClick={() => openUserProfile(user)}
                style={{cursor: 'pointer', marginButtom: "8px"}}>
                {user.name}
            </li>
            
        ))}
    </ul>

     
      
    </>
  )
}

export default List