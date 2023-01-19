import React from "react";

function Welcome(props){
    return(
        <div className="login">
            <h1>Hey {props.name}!</h1>
            <h2>Welcome to College.</h2>
        </div>
        
    );
}

export default Welcome;

