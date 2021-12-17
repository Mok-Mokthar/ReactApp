import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './User.css'

import {Link} from 'react-router-dom';

export default function Users() {

    const [users, setUsers] = useState([])
    const { userId } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}` )
        .then(res => {
            console.log(res.data)
            setUsers(res.data)         
        })
    }, [userId])

    if(users.length === 0){
        return <span>Loading ...</span>
    }

    return (
        <div className="root">
            <h1>User info</h1>
            <div className="info">
                <div className="item">
                    name : {users.name} 
                </div>
                <div className="item">
                    email : {users.email}
                </div>
                <div className="itemAddress">
                    <div className="mainAddress">
                        address :    
                    </div> 
                    <div className="address" style={{justifyContent: 'center', marginTop: '10px'}}> 
                        {users.address.steet}
                    </div>
                    <div className="address">
                        {users.address.suite}                   
                    </div>
                    <div className="address">
                        {users.address.city}
                    </div>
                    <div className="address" style={{marginBottom: '10px'}}>
                        {users.address.zipcode} 
                    </div>
                </div>
                <div className="item">
                    phone : {users.phone}
                </div>
                <div className="item">
                    website : {users.website}
                </div>
                <div className="item">
                    company name : {users.company.name}
                </div>
                <div className="btnDetails">
                    <Link to={"../users"} className="">back to user</Link>
                </div>
            </div>
        </div>
    )
}
