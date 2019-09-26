import React from 'react'

// * STYLE IMPORTS (style-components)
import style from '../Search/StyledSearch';

export const Results = ({ name, picture, business_type }) => (
    <style.results>
        {/* //? CARD DISPLAY INFORMATION
        */}{console.log(name, picture, business_type)}

        <div className={`user__div`}>
            {/* //? DIV NESTING TWO DIVS - PICTURE && INFO DATA
            */}

            <div className={`user-img`}>
                <img src={picture.large} alt={`image of ${name.first} ${name.last}`} />
            </div>

            <div className={`user-info`}>
                <dt>{name.first} {name.last}</dt>
                <dd>{business_type}</dd>
            </div>
        </div>

        <div>
            {/* //? DIV FOR SETTINGS STYLES
            */}
        </div>
    </style.results>
)