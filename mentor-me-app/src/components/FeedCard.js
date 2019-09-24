import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import './FeedCard.scss';
import {axiosWithAuth} from "../utils/axiosWithAuth";   

const FeedCard = (props) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axiosWithAuth.get("https://rickandmortyapi.com/api/character/").then(res => {
          setQuestions(res.data.results);
          console.log(res.data.results);
        }).catch(e => console.log(e));
      }, []);

    let stringLinkingImage = "https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1682&q=80";
    const Card = styled.div`
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        
        
        background-image: url(${stringLinkingImage});
        background-size:cover;
        width:100%;
        height:400px;
        opacity:0;
        
        position:relative;
        animation: 1s ease-out 0s 1 slideInFromRight;
        animation-fill-mode:forwards;
        transition: 1s;
            
        @media(min-width: 800px) {
            padding:20px;
            height:400px;
            max-width:800px;
            left:800px;
        }


        &:nth-child(1) {
            -webkit-animation-delay: .2s;
        }

        &:nth-child(2) {
            -webkit-animation-delay: .4s;
        }

        &:nth-child(3) {
            -webkit-animation-delay: .6s;
        }

        &:nth-child(4) {
            -webkit-animation-delay: .8s;
        }


        &:hover {
            transform: scale(1.02);
            max-width:816px;
            z-index:1;
            box-shadow: 10px 8px black;

        }


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
        margin-top:0px
        margin-bottom: 20px;
        text-align:center;
    `
    



    return (
        // probably set background image with style in here
        // <Card style={{backgroundImage: "url(" + stringLinkingImage + ")"}}>
        <Card>
            <Name>Michael Harms</Name>
            
            <Category>Cybercoinology</Category>
            <Question>Why do people say Bitcoin is fungible if there are blacklisted addresses associated with Iranian cybercrime?</Question>
        </Card>
        
    )
} 

export default FeedCard;