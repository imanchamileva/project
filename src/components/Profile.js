import React from 'react'
//useselector used to access our state
import { useSelector } from 'react-redux'


const Profile = () => {

    //to access user state
                            //access state and then value
    const user = useSelector((state) => state.user.value)

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>

        </div>
    )
}

export default Profile