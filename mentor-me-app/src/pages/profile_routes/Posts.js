import React from 'react';

export default function Posts({posts}){
    return (
        <div>
            {
                posts.map(post => <StudentCard post={post} />)
            }
        </div>
    )
}


function StudentCard({post}){
    return(
        <div>
            <img src={post.image} />
            <div>
                <h4>{post.name}</h4>
                <p>{post.description}</p>
            </div>
        </div>
    )
}