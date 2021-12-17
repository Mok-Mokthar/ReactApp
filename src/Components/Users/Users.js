import axios from "axios"
import { useEffect, useState } from "react"
import './Users.css'

import {Link} from 'react-router-dom';

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)         
        })
    }, [])

    if(users.length === 0){
        return <span>Loading ...</span>
    }

    return (
        <div className="root">
            <h1>There are our users</h1>
            <ul>
                {users.map(user =>(
                    <li key={user.id}>
                        <div className="userContainer">
                            <div className="name">{user.name}</div> 
                            <div className="btnDetails">
                                <Link to={"/user/" + user.id}>view user details</Link>
                            </div>
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
