import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home( ) {
    return (
        <>
        <div>  
            <Link to="/todo"> <h3>Access without Login</h3> </Link>

            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form className="form1"/>
                    <input className="un " type="text" align="center" placeholder="Username"/>
                    <input className="pass" type="password" align="center" placeholder="Password"/>
                    <div className="submit-container-box">
                        <a className="submit" align="center">Sign in</a>
                    </div>
                    <p className="forgot" align="center"> <a href="#"/>Forgot Password?</p>   
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home

