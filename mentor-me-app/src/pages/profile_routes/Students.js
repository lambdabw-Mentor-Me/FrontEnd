import React from 'react';


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
        <div>
            <img src={student.image} />
            <div>
                <h4>{student.name}</h4>
                <p>{student.description}</p>
            </div>
        </div>
    )
}