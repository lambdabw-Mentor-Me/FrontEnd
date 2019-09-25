import React from 'react';
import styled from 'styled-components';


export default function AboutMentor({mentor}){
    const {heading, details} = mentor
    console.log(heading);
    
    return (
        <AboutContainer>
            <h4>{heading}</h4>
            <p>{details}</p>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    h4 {
        font-size: 2rem;
        color: gray;
    }

    p {
        margin: 0;
        line-height: 1.7rem;
        color: black;
    }
`