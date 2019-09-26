import React from 'react';
import mainLogo from "../mentor-me-logo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Home = () => {

   return (
        <div className="welcome">
            <h1>Welcome to Mentor Me!</h1>
            <Link to="/ent-register"><img src={mainLogo} alt="Mentor Me App Logo" /></Link>
        </div>
    )
} 

export default Home;