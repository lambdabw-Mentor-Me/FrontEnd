import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

// * STYLE IMPORTS (style-components)
import style from './StyledQuestions';

const Questions = () => {

    // * useState for temporary profile images
    const [pic, setPic] = useState({});

    // ? AXIOS CALL FOR USER INFORMATION (User pictures)
    useEffect(() => {
        axios.get(`https://randomuser.me/api/?inc=picture`)
            .then(res => res.data.results[0])
            .then(res => setPic(res.picture))
    }, [])

    // ! LOG DATA
    console.log(pic)

    return (
        <style.section>
            {/* // * TOP DIV PROVIDING INFO (TIME, USERNAME, PIC, ETC.)
             */}
            <style.infoDiv>
                <div className={`info__top`}>
                {/*  // * EXTRA INFO DIV NESTED INSIDE ".info__top" CLASS
                 */}
                    <div className={`info__extra-info`}>
                        <span className={`local-time`}>{moment().format('LT')}</span>
                    </div>

                    <h2>USERNAME HERE</h2>
                </div>

                <div className={`info__bottom`}>
                    <img src={`${pic.large}`} alt="Profile image" />
                </div>
            </style.infoDiv>

            {/* // * MIDDLE DIV FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <style.descriptionDiv>
                <article className={`description__inner-div`}>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
            </style.descriptionDiv>

            {/* // * BUTTON FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <style.btnDiv>
                <button>
                    {/* // TODO: IMG icon here.
                 */}
                    Respond button here
                </button>
            </style.btnDiv>
        </style.section>
    )
}

export default Questions;