import React from "react";
import { NavLink, Route } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";
import '../App.scss';

import {dummyMentor, dummyStudents, dummyReviews} from '../pages/profile_routes/data';
import Students from '../pages/profile_routes/Students';
import AboutMentor from "./profile_routes/AboutMentor";
import Reviews from '../pages/profile_routes/Reviews';

const ProfileImage = styled.img``;

const ParentDiv = styled.div`
  width: 40rem;
  margin: 0 auto;
`;

const SomeComponent = styled.div`
	position: relative;
  img {
    height: 40rem;
    position: relative;
		width: 40rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  div {
    height: 40rem;
    position: absolute;
		width: 40rem;
    top: 0;
    left: 0;
    opacity: .3;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #000;
  }

`

const Stack = styled.div`
	/* top: -10rem; */
	/* margin: 0 auto; */
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
  z-index: 2;
  justify-content: flex-end;
	p {
		color: white;
		margin: .5rem 0;
	}
`

const GradientButton = styled.div`
  position: relative;
  top: -.3rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
	background-image: linear-gradient(82deg, #5574F7 , #fff, #60C3FF);

  &:hover {
    cursor: pointer;
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 0.8rem;
  }
`;

const DetailsContainer = styled.div`
  position: relative;
  /* top: -8rem; */
	padding: 0 2rem;

  div {
    
  }
`;

const DetailsRow = styled.div`
	display: flex;
	justify-content: space-evenly;
`

export default function ProfileComponent() {
  return (
    <div style={{"width":"100%"}}>
       <ParentDiv>
      <SomeComponent>
        <ProfileImage
          src={
            "https://www.ihrb.org/uploads/profile-pictures/AlisonBscoe_thumbnail.jpg"
          }
        />
        <Stack>
          <p>Lucy Lee</p>
          <p>Photographer, New York</p>
          <p>Stars</p>
        </Stack>
        <div></div>
      </SomeComponent>

      <div className="bottom-component">
        <GradientButton>
          <img
            src={
              "https://www.ihrb.org/uploads/profile-pictures/AlisonBscoe_thumbnail.jpg"
            }
          />
          <p>MENTOR ME</p>
        </GradientButton>
        <DetailsContainer>
          <DetailsRow>
            <MinorDetails count={"-"} metric={"About"} to="/profile/" />
            <MinorDetails
              count={23}
              metric={"Students"}
              to="/profile/students"
            />
            <MinorDetails count={23} metric={"Reviews"} to="/profile/reviews" />
            <MinorDetails count={23} metric={"Posts"} to="/profile/posts" />
          </DetailsRow>
          
          <Route exact path='/profile' render = {props => {
            return <AboutMentor {...props} mentor={dummyMentor} />
          }} />
          <Route path="/profile/students" render={ props => {
            return <Students students = {dummyStudents} />
          }} />

          <Route path="/profile/reviews" render={ props => {
            return <Reviews reviews = {dummyReviews} />
          }} />
        </DetailsContainer>
      </div>
    </ParentDiv>

    </div>
  );
}

function MinorDetails({ count, metric, to }) {
  return (
    <FancyLink activeClassName="activeClass" to={to}>
      <MinorDetail>
        <h4>{count}</h4>
        <p>{metric}</p>
      </MinorDetail>
    </FancyLink>
  );
}

const FancyLink = styled(NavLink)`
  color: white;
`

const MinorDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	margin-top: 2rem;

	p {
		margin: 0;
  }
  
  h4 {

  }
`