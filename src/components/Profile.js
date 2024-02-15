import React from "react"
import { useParams } from "react-router-dom";

function Profile(){
    const{id}=useParams()
    return(
        <>
        <h1>User Profile Page</h1>
        <p>User Id is <b>{id}</b></p>
        </>
    )
}

export default Profile