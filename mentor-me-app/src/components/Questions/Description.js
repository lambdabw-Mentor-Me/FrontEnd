import React from 'react';
import Mod from '../Mod';

// * STYLE IMPORTS (style-components)
import style from './StyledQuestions';

// ? DESCRIPTION COMPONENT FOR Questions.js
export const Description = (props, { questions, setQuestions }) => (
    <style.descriptionDiv>
        {/* //* USER POSTS AND DETAILS
         */}
        <article className={`description__inner-div`}>
            <div className='btn-container'>
                <Mod questions={questions} setQuestions={setQuestions} {...props} />
            </div>
            <h3>My Questions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
    </style.descriptionDiv>
)