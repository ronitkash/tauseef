import React from "react";

function About(props){
    return(
        <div className="container">
            <h1>{props.name}</h1>
            <p>Hey There ! <br /> I am {props.name}. <br />I am a student</p>
        </div>
    )
}

export default About;