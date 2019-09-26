import React, { useState, useEffect } from 'react';
import axios from 'axios';

// * COMPONENT IMPORTS
import { Info } from './Info'
import { Results } from './Results'
import { BottomNav } from './BottomNav'

export const SearchResult = ({ questions }) => {

    // * STATE FOR NEW DATA OBJECTS AS USER DATA
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?inc=name,picture&results=${questions.length}`)
        .then(res => res.data.results)
        .then(res => {
            // * CONTAINER FOR NEW JOINED OBJECTS FROM QUESTIONS PROPS && MOCK DATA OBJECTS
            const newQuestions = []

            // * JOIN BOTH OBJECTS FROM API MOCK DATA && PASSED PROP DATA
            for (let i = 0; i < res.length; i++) {
                newQuestions.push({...questions[i], ...res[i]})
                console.log(newQuestions)
            }

            // * SET NEW STATE
            setUsers(newQuestions)
        })
    }, [])

    // ! LOG USER DATA
    console.log(users)

    return (
        <div>
            {console.log(questions)}
            {/* // * TOP COMPONENT DISPLAYING INPUT SEARCH FUNCTIONALITY
        */}
            <Info />
            {/* // * MIDDLE COMPONENT DISPLAYING RESULTS OF SEARCH
        */}
            <Results />
            {/* // * BOTTOM COMPONENT DISPLAYING NAV BAR
        */}
            <BottomNav />
        </div>
    )
}