import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mod from '../components/Mod';
import UserProfilePic from '../components/UserProfilePic';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// * COMPONENT IMPORTS
import { Info } from '../components/Questions/Info'
import { Description } from '../components/Questions/Description'
import { Button } from '../components/Questions/Button'

// * STYLE IMPORTS (style-components)
import style from '../components/Questions/StyledQuestions'


const Questions = (props) => {

        const [questions, setQuestions] = useState([])

        useEffect(() => {
            axiosWithAuth().get(`/questions`)
            .then(res => {
            console.log(res.data)
            setQuestions(res.data)
            })
            .catch(err => console.log(err.response))
        }, [])


         
        return (  
         <style.section>
             {/* pic={pic} */}
            <Info  />

            {/* // * MIDDLE DIV FOR POSTED QUESTIONS & DETAILS
             */}
            <Description questions={questions} setQuestions={setQuestions} {...props} />

            {/* // * BUTTON FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <Button />

        </style.section>
    )
}

export default Questions;