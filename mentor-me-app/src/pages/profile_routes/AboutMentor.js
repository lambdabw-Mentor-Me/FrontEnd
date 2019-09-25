import React from 'react';


export default function AboutMentor({heading, details}){
    return (
        <div>
            <h4>{heading}</h4>
            <p>{details}</p>
        </div>
    )
}