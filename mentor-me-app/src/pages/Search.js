import React, { useState, useEffect } from 'react';

// * COMPONENT IMPORTS
import { Info } from '../components/Search/Info'
import { Results } from '../components/Search/Results'
import { BottomNav } from '../components/Search/BottomNav'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-components";
import {Input} from "antd";
// * STYLE IMPORTS (style-components)
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
        const [ents, setEnts] = useState([]);

        const entObject = (item) => ents.find(obj => obj.id == item.id).email
        
        useEffect(() => {
            axiosWithAuth().get("/ent/all")
                .then(res => {
                    console.log("ents", res)
                    setEnts(res.data)
                    
                })},[])
                

        useEffect(() => {
            axiosWithAuth().get('/questions/')
            .then(res => {
                console.log('res =>',res);
                setQuestions(res.data.filter(item => {
                    console.log("filtering", item);
                    console.log("query", query.toLowerCase());
                    console.log("question", item.question.toLowerCase());
                    console.log("Filter test" , item.question.toLowerCase().includes(query.toLowerCase()));
                    
                    return (item.question.toLowerCase().includes(query.toLowerCase())  && query != "")

                }))
            
            
            })
            .catch(err => console.log(err.response))
            
            
        }, [query])

        const handleSearch = (value, event) => {
            
            setQuery(value);
            console.log(query);
        };

    return (
        <style.section>
            {/* // * TOP COMPONENT DISPLAYING INPUT SEARCH FUNCTIONALITY
            */}
            <Info />

            <InputContainer>
                <Input.Search onSearch={handleSearch} />
            </InputContainer>

            <div className="search-results-container">
                {questions.map(item => {
                    return (
                        <div className="search-result" key={item.id}>
                        <h2>
                            <span aria-label="sparkles" role="img">
                            ✨
                            </span>
                            {item.question}
                        </h2>
                        <h3>{item.title}</h3>
                        <h3 className="Email">{entObject(item) && entObject(item)}</h3>
                        </div>
                    );
                })}
            </div>

            {/* // * MIDDLE COMPONENT DISPLAYING RESULTS OF SEARCH
            */}
            <Results />

            {/* // * BOTTOM COMPONENT DISPLAYING NAV BAR
            */}
            <BottomNav />
        </style.section>
    )
}

export default Search;