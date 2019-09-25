import React from 'react';
import moment from 'moment';

// * STYLE IMPORTS (style-components)
import style from './StyledQuestions';

// ? INFO COMPONENT FOR Questions.js
export const Info = ({pic}) => (
    <style.infoDiv>
        {/* // * TOP INFO DIV TIME & USERNAME
        */}
        <div className={`info__top`}>
            <div className={`info__extra-info`}>
                <span className={`local-time`}>{moment().format('LT')}</span>
            </div>

            <h2>USERNAME HERE</h2>
        </div>

        {/* // * BOTTOM INFO DIV FOR IMAGE
         */}
        <div className={`info__bottom`}>
            <img src={`${pic.large}`} alt="Profile image" />
        </div>
    </style.infoDiv>
)