import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';
import Mod from '../components/Mod';
import UserProfilePic from '../components/UserProfilePic';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// * STYLE IMPORTS (style-components)
import style from './StyledQuestions';

const Questions = (props) => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {

        axiosWithAuth().get('/questions/')
        .then(res => {
        console.log('res =>',res)
        setQuestions(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])


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
                {/* <UserProfilePic /> */}
            </style.infoDiv>

            {/* // * MIDDLE DIV FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <style.descriptionDiv>
                <div><Mod {...props}/></div>
                {questions.map(question => {
                return (
                    <div>
                        <h4>{question.business_type}</h4>
                        <h1>{question.title}</h1>
                        <h2>{question.question}</h2>
                    </div>
                )
        })}
            </style.descriptionDiv>

            
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