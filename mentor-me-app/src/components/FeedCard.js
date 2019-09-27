import React, {useState} from 'react';
import styled from "styled-components";
import './FeedCard.scss';
import {Link} from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';




const FeedCard = (props) => {
    const [favorites, setFave] = useState([]);
    const [hasAnim, setHasAnim] = useState("1s ease-out 0s 1 slideInFromRight");

    
    const handleClick = (event) => console.log(event);
    
    
    let stringLinkingImage = "https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1682&q=80";
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }


    //   attempting to implement unsplash random picture


    //   try {
    //     stringLinkingImage = props.photos[getRandomInt(0,29)].url;
    // } catch {
    //     console.log('UNSPLASH API lagging')
    // }
    const Card = styled.div`
        color:white;
        background-image: url(${stringLinkingImage});
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
        padding:20px;
        height:400px;
        width:100%;
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
    
    anime({
        targets: 'a',
        translateX: anime.stagger(10),
        translateY: anime.stagger(5),
        loop:2,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });    




    return (
        // probably set background image with style in here
        // <Card style={{backgroundImage: "url(" + stringLinkingImage + ")"}}>
       
            <Card onClick={handleClick}>
                <Link to="/profile"><Name className="name-info">{props.id}</Name></Link>
                <Link to="/questions"><Category>{props.title}</Category></Link>
                <Link to="/questions"><Question>{props.question}</Question></Link>
                
            </Card>
        
    )
} 

export default FeedCard;