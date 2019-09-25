import React from 'react';

export default function Reviews({reviews}){
    return (
        <div>
            {
                reviews.map(review => <StudentCard review={review} />)
            }
        </div>
    )
}


function StudentCard({review}){
    return(
        <div>
            <img src={review.image} />
            <div>
                <h4>{review.name}</h4>
                <p>{review.description}</p>
            </div>
        </div>
    )
}