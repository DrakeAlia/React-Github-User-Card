import React from "react";

function Followers(props) {
    return (
        <div>
            <img src={props.users.avatar_url} />
            <div className='list'>
                <h3>{props.users.name}</h3>
                <p><span>Profile: </span><a>{props.users.html_url}</a></p>
                <p><span>Username: </span>{props.users.login}</p>
            </div>
        </div>
    )
}

export default Followers;