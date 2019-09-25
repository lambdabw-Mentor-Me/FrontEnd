import React from 'react';
import styled from 'styled-components';

export default function Reviews({reviews}){
    return (
        <div>
            {
                reviews.map(review => <ReviewCard review={review} />)
            }
        </div>
    )
}


function ReviewCard({review}){
    return(
        <Card>
            <img src={review.image} />
            <div>
                <h4>{review.title}</h4>
                <p>{review.content}</p>
            </div>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    border: .1rem solid gray;
    border-radius: .7rem;
    margin-top: .7rem;
    margin-bottom: 0;
    img {
        width: 3rem;
        height: 3rem;
        margin: auto .7rem;
        border-radius: 1.2rem;

        h4 {
            font-family: 'Tangerine', 'cursive';
            font-size: 3rem;
            margin: 0;
        }

        p {
            line-height: 1.7rem;
            margin: 0;
        }
    }
`