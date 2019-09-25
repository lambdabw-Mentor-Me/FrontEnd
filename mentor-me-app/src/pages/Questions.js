import React, { useState, useEffect } from 'react';
import axios from 'axios';

// * COMPONENT IMPORTS
import { Info } from '../components/Questions/Info'
import { Description } from '../components/Questions/Description'
import { Button } from '../components/Questions/Button'

// * STYLE IMPORTS (style-components)
import style from '../components/Questions/StyledQuestions'

// ? QUESTIONS PAGE
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

            {/* //* TOP DIV FOR QUESTION.JS
             */}
            <Info pic={pic} />

            {/* // * MIDDLE DIV FOR POSTED QUESTIONS & DETAILS
             */}
            <Description />

            {/* // * BUTTON FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <Button />
        </style.section>
    )
}

export default Questions;