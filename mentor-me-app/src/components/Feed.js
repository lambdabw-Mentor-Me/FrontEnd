import React from 'react';
import FeedCard from "./FeedCard";
import styled from "styled-components";

const FeedBox = styled.div`
    overflow:hidden:
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:200px;

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