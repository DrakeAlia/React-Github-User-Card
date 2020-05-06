import React from "react";


const User=(props) => {
    return (
        <div>
            <img src={props.user.avatar_url}/>
            <div className='list'>
            <h3>{props.user.name}</h3>
                <p><span>Profile: </span><a>{props.user.html_url}</a></p>
                <p><span>Username: </span>{props.user.login}</p>
                <p><span>Following: </span>{props.user.following}</p>
                <p><span>Followers: </span>{props.user.followers}</p>
                <p><span>Bio: </span>{props.user.bio}</p>
            </div>    
        </div>
    )
}

export default User;