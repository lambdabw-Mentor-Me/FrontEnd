import React, { useState, useEffect } from 'react';
import { Input } from "antd";

// * COMPONENT IMPORTS
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { SearchResult } from '../components/Search/SearchResult'

// * STYLE IMPORTS (style-components)
import styled from "styled-components";
import style from '../components/Search/StyledSearch';

const InputContainer = styled.div`
    width:50%;
    margin:1%;
    padding-top:15px;
`

// ? SEARCH PAGE.
const Search = () => {

    const [questions, setQuestions] = useState([])
    const [query, setQuery] = useState("");

    const [entreprenuers, setEntreprenuers] = useState([]);

    // * CLEAR QUERY
    const clearQuery = () => setQuery("");

    useEffect(() => {
        axiosWithAuth().get("/ent/all")
            .then(res => {
                // console.log("ents", res)
                setEntreprenuers(res.data)

            })
    }, [])


    useEffect(() => {
        axiosWithAuth().get('/questions/')

            .then(res => {
                // console.log('res =>', res);
                setQuestions(res.data.filter(item => {
                    console.log("filtering", item);
                    // console.log("query", query.toLowerCase());
                    // console.log("question", item.question.toLowerCase());
                    // console.log("Filter test", item.question.toLowerCase().includes(query.toLowerCase()));

                    return (item.question.toLowerCase().includes(query.toLowerCase()) && query != "")

                }))
            })
            .catch(err => console.log(err.response))


    }, [query])

    const handleSearch = (value, e) => {
        // * PREVENT DEFAULT ACTIONS
        e.preventDefault();

        setQuery(value);
        console.log(query);
    };

    return (
        <style.section>

            {/* // ! LOG DATA
             */}{console.log(questions)}

            {/* // ? IF DATA EXIST, RENDER SEARCHRESULTS COMPONENT
                // ? ELSE, RETURN THE SEARCH BAR TO FILL QUESTIONS.
             */}

            {
                questions.length > 0
                    ?
                    <SearchResult
                        questions={questions}
                        clearQuery={clearQuery}
                        query={query}
                    />
                    :
                    <InputContainer>
                        <Input.Search onSearch={handleSearch} />
                    </InputContainer>
            }
        </style.section>
    )
}

export default Search;