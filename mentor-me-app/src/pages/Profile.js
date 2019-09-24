import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Search from './Search'

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
            <MinorDetails count={23} metric={"Students"} to="/profile/students"/>
            <MinorDetails count={23} metric={"Reviews"}/>
            <MinorDetails count={23} metric={"Posts"}/>


            <Route path= "/profile/students" component={Search}/>
        </div>
        </div>
    </div>
    )
}

function MinorDetails({count, metric, to}){
    return(
        <NavLink to={to}>
            <div>
            <p>{count}</p>
            <p>{metric}</p>
        </div>
        </NavLink>
    )
}