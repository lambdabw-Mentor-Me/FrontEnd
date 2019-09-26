import React from 'react';
import mainLogo from "../mentor-me-logo.png";
import styled from "styled-components";

const Home = () => {

    const Logo = styled.div`
        
        width:200px;
        background-color:white;

    `


    return (
        <div className="welcome">
            <h1>Welcome to Mentor Me!</h1>
            <img src={mainLogo} />
        </div>
    )
} 

export default Home;