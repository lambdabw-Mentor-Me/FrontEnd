import React from 'react';
import FeedCard from "./FeedCard";
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';


// useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//     axiosWithAuth.get("https://rickandmortyapi.com/api/character/").then(res => {
//       // setCharacters(res.data.results);
//       console.log(res.data.results);
//           }).catch(e => console.log(e));
//   }, []);


const FeedBox = styled.div`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
`


const Feed = (props) => {


    
    return (
        // <section className="feed-container">
        // {feedData.map(question => 
        
        //     <FeedCard
        //         id={question.id}
        //         name={questions.name}
        //         category={questions.type}
        //         question={questions.dimension}
        //         imgsrc={questions.image}
        //     />   
        // )}
        // </section>

        <FeedBox>
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </FeedBox>
    )
} 

export default Feed;