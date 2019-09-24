import React, {useState} from 'react';
import styled from "styled-components";
import './FeedCard.scss';

const FeedCard = (props) => {
    const [questions, setQuestions] = useState([]);

    let stringLinkingImage = "https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1682&q=80";
    const Card = styled.div`
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
        padding:20px;
        height:400px;
        width:800px;
        box-sizing:border-box;
        
        background-image: url(${stringLinkingImage});
        background-size:cover;
        max-width:800px;
        opacity:0;
        left:800px;
        position:relative;
        animation: 1s ease-out 0s 1 slideInFromRight;
        animation-fill-mode:forwards;
        transition: 1s;
            

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