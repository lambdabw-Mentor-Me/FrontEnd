import React from 'react';
import styled from 'styled-components';


export default function Students({students}){
    return (
        <div>
            {
                students.map(student => <StudentCard student={student} />)
            }
        </div>
    )
}


function StudentCard({student}){
    return(
        <Card>
            <img src={student.image} />
            <div>
                <h4>{student.name}</h4>
                <p>{student.description}</p>
            </div>
        </Card>
    )
}

const StudentsContainer = styled.div`

`

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