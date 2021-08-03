import React from "react";

function Nav(){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src="./Ritik.jpeg" alt="Logo" width="40" />
                    &nbsp;Tauseef's Assignment
                </a>
                <div className="d-flex">
                    <a href="/" className="btn btn-outline-success">Home</a>&nbsp;
                    <a href="/about" className="btn btn-outline-primary">About</a>&nbsp;
                    <a href="/contact" className="btn btn-outline-danger">Contact</a>&nbsp;
                </div>
            </div>
        </nav>
    )
}

export default Nav;