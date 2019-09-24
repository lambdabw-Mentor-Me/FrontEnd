import React from 'react';
import styled from "styled-components";

const stringLinkingImage = "https://i.imgur.com/ezR7SMQ.jpg";

const Card = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    padding:20px;
    position:fixed;
    height:400px;
    background-image: linear-gradient(#60C3FF,#5574F7);
    background-size:cover;
`

const Name = styled.h2`
    color:white;
    margin:0px;
    padding:0px;
`
const Category = styled.h3`
    color: #FFF;
    opacity: .6; 
    margin:4px;
`
const Question = styled.p`
    color:white;
    font-weight:bold;
    margin: 0px;
    text-align:center;
`

const FeedCard = (props) => {
    return (
        // probably set background image with style in here
        <Card style={{backgroundImage: "url(" + stringLinkingImage + ")"}}>
            <Name>Michael Harms</Name>
            <Category>Cybercoinology</Category>
            <Question>Why do people say Bitcoin is fungible if there are blacklisted addresses associated with Iranian cybercrime?</Question>
        </Card>
        
    )
} 

export default FeedCard;