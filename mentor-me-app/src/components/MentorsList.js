import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {NavLink} from 'react-router-dom';

export default function MentorsList() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("/ment/all/")
      .then(response => {
        console.log(response.data);
        setMentors([...response.data, {name: "Maaruf Dauda", email: "SomeEmail@random.com"}]);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return loading ? <h4>loading</h4> : <MentorList>
      {
          mentors.map(mentor => <MentorCard mentor = {mentor} />)
      }
  </MentorList>;
}


function MentorCard({mentor}){
    return (
        <NavLink to="/profile">
            <StyledMentor>
            <h4>{mentor.name ? mentor.name : `A very undefined name`}</h4>
            <h5>{mentor.email}</h5>
        </StyledMentor>
        </NavLink>
    )
}

const StyledMentor = styled.div`
    display: flex;
    border: 1px solid white;
    border-radius: 1.2rem;
    flex-direction: column;
    padding: 0 3rem;
    margin: 3rem 1.5rem 1rem;
    text-align: center;
    cursor: pointer;
    
    h5 {
        color: white;
        font-size: 3rem;
    }

    h4 {
        font-family: 'Tangerine', cursive;
        font-size: 3rem;
    }
`

const MentorList = styled.div`
    display: flex;
    width: 80rem;
    margin: 0 auto;
    flex-wrap: wrap;
`