import React, {useState, useEffect} from 'react';
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

    // ? MOMENT PACKAGE PROVIDING LOCAL TIME TO USERS.
    // TODO: Implement
    console.log(moment().format('LT'))

    return (
        <style.section>
            {/* // * TOP DIV PROVIDING INFO (TIME, USERNAME, PIC, ETC.)
             */}
            <style.infoDiv>
                <div className={`info__top`}>
                    <h2>USERNAME HERE</h2>
                </div>

                <div className={`info__bottom`}>
                    <img src={`${pic.large}`} alt="Profile image"/>
                </div>
            </style.infoDiv>

            {/* // * MIDDLE DIV FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <style.descriptionDiv>
                <h3>DESCRIPTION HERE:</h3>
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