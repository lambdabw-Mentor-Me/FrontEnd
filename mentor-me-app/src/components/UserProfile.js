import React from 'react';

export default function ProfileComponent(){
    return (
    <div>
        <img />
        <div>
            <p>Lucy Lee</p>
            <p>Photographer, New York</p>
            <p>Stars</p>
        </div>
        
        <div className="bottom-component">
        <div className="gradient-button">
            <img />
            <p>MENTOR ME</p>
        </div>
        <div>
            <MinorDetails count={23} metric={"Students"}/>
        </div>
        </div>
    </div>
    )
}

function MinorDetails({count, metric}){
    return(
        <div>
            <p>{count}</p>
            <p>{metric}</p>
        </div>
    )
}