import React from "react";

function Home(props){
    return(
    <div className="container my-4">
        <img src={props.imgs} width="10%" alt="pic" />
        <h2>Age : {props.age}</h2>
        <h3>Name : {props.name}</h3>
    </div>
    )
}

export default Home;